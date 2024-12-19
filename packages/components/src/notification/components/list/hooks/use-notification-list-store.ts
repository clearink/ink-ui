import type { GroupTransitionRef } from '@comps/_shared/components/transition/components/group-transition/props'
import type { VoidFn } from '@internal/types'
import type { ReactElement } from 'react'

import { useConstant, useForceUpdate } from '@comps/_shared/hooks'
import { withDefaults } from '@comps/_shared/utils'
import { isBoolean, reflow } from '@internal/utils'
import { useMemo } from 'react'

import type { NotificationStackConfig } from '../../../_shared/props'
import type { NotificationListProps, StackState } from '../props'

const defaultStackConfig = { threshold: 3, offset: 8, gap: 16 }

export class NotificationListState {
  components: GroupTransitionRef['components'] | null = null

  transforms = new Map<HTMLElement, StackState>()

  panels = new Map<ReactElement['key'], HTMLElement>()

  hovers = new Set<ReactElement['key']>()

  stackEnable: boolean = false

  stackConfig: NotificationStackConfig = defaultStackConfig

  constructor(public _props: NotificationListProps) {}
}

export class NotificationListAction {
  private get components() {
    return this.states.components
  }

  private get panels() {
    return this.states.panels
  }

  private get transforms() {
    return this.states.transforms
  }

  private get hovers() {
    return this.states.hovers
  }

  private get _props() {
    return this.states._props
  }

  private get stackEnable() {
    return this.states.stackEnable
  }

  private get stackConfig() {
    return this.states.stackConfig
  }

  private normalizeStackInfo = () => {
    const { stack } = this.states._props

    const needMerge = stack && !isBoolean(stack)

    this.states.stackEnable = needMerge ? true : !!stack

    this.states.stackConfig = needMerge
      ? withDefaults(stack as any, defaultStackConfig)
      : defaultStackConfig
  }

  constructor(public forceUpdate: VoidFn, private states: NotificationListState) {}

  setPanel = (key: ReactElement['key'], el: HTMLElement | null) => {
    if (el) this.states.panels.set(key, el)
    else this.states.panels.delete(key)
  }

  setComponents = (value: GroupTransitionRef | null) => {
    this.states.components = value?.components || null
  }

  setInnerProps = (value: NotificationListProps) => {
    this.states._props = value

    this.normalizeStackInfo()
  }

  cleanupHover = () => {
    const { notices } = this._props

    const set = new Set(notices.map(item => item.key))

    const oldCount = this.hovers.size

    this.hovers.forEach((key) => { !set.has(key) && this.hovers.delete(key) })

    if (this.hovers.size !== oldCount) this.forceUpdate()
  }

  addHover = (key: ReactElement['key']) => {
    if (!this.stackEnable) return

    this.cleanupHover()

    this.hovers.add(key)

    this.forceUpdate()
  }

  removeHover = (key: ReactElement['key']) => {
    if (!this.stackEnable) return

    this.hovers.delete(key)

    this.forceUpdate()
  }

  filterElements = () => {
    if (!this.components) return []

    const elements = Array.from(this.components)
      .reduce((result, [key, { isExiting, isExited, element }]) => {
        const panel = this.panels.get(key)

        if (panel && element && !(isExiting || isExited))
          result.push([panel, element as any])

        return result
      }, [] as [HTMLElement, HTMLElement][])

    return this.stackConfig ? elements.reverse() : elements
  }

  updateTransforms = () => {
    this.transforms.clear()

    const elements = this.filterElements()

    if (!elements.length) return

    const { gap, offset, threshold } = this.stackConfig

    const factor = this._props.placement.startsWith('top') ? 1 : -1

    const count = elements.length

    const isExpanded = count <= threshold || this.hovers.size > 0

    const latest = elements[0][0]

    for (let delta = 0, i = 0, scale = 1; i < count; i++) {
      const [panel, wrapper] = elements[i]

      const height = (isExpanded ? panel : latest).offsetHeight

      this.transforms.set(wrapper as any, { delta, scale, height })

      if (i >= count - 1) continue

      delta += (isExpanded ? panel.offsetHeight + gap : offset) * factor

      if (!isExpanded) scale = 1 - offset * 2 * Math.min(i + 1, 3) / latest.offsetWidth
    }
  }

  applyTransforms = (exclude?: HTMLElement) => {
    this.updateTransforms()

    const factor = this._props.placement.endsWith('Left') ? -1 : 1

    this.transforms.forEach(({ delta, scale, height }, dom) => {
      const dx = dom === exclude ? `${100 * factor}%` : '0'

      dom.style.setProperty('transform', `translate3d(${dx}, ${delta}px, 0) scaleX(${scale})`)

      dom.style.setProperty('height', height ? `${height}px` : '')
    })
  }

  removeTransforms = () => {
    this.filterElements().forEach(([_, el]) => {
      el.style.removeProperty('transform')
      el.style.removeProperty('height')
    })
  }

  handleUpdate = () => {
    this.stackEnable ? this.applyTransforms() : this.removeTransforms()
  }

  handleEnter = (el: HTMLElement) => {
    if (!this.stackEnable) return

    this.cleanupHover()

    el.style.setProperty('transition-duration', '0s', 'important')

    this.applyTransforms(el)

    reflow(el)

    el.style.removeProperty('transition-duration')
  }

  handleEntering = (el: HTMLElement) => {
    if (!this.stackEnable) return

    const { delta, scale } = this.transforms.get(el) || {}

    const value = `translate3d(0, ${delta || 0}px, 0) scaleX(${scale || 1})`

    el.style.setProperty('transform', value)
  }

  handleExit = (el: HTMLElement) => {
    if (this.stackEnable) this.applyTransforms()

    el.style.setProperty('height', `${el.offsetHeight}px`)
  }

  handleExiting = (el: HTMLElement) => {
    el.style.setProperty('height', '0px')
  }
}

export default function useNotificationListStore(props: NotificationListProps) {
  const update = useForceUpdate()

  const states = useConstant(() => new NotificationListState(props))

  const actions = useMemo(() => new NotificationListAction(update, states), [update, states])

  // 同步内部数据
  useMemo(() => { actions.setInnerProps(props) }, [actions, props])

  return { states, actions }
}
