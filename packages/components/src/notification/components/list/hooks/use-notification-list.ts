import type { GroupTransitionRef } from '@comps/_shared/components'
import type { NotificationStackConfig } from '@comps/notification/_shared/props'
import type { MayBe } from '@internal/types'
import type { CSSProperties, ReactElement } from 'react'

import { useConstant, useExactState, useForceUpdate } from '@comps/_shared/hooks'
import { isUndefined, reflow } from '@internal/utils'

import type { NotificationListProps } from '../props'

import { filterElements, getElementsStackState } from '../utils/rename'

export class NotificationListRefs {
  components: GroupTransitionRef['components'] | undefined = undefined

  panels = new Map<MayBe<ReactElement['key']>, HTMLElement>()

  // 由于 mouseleave 与 mouseenter 触发间隔太短, 故使用 ref 记录该值
  hovers = new Set<MayBe<ReactElement['key']>>()

  reset = () => {
    this.hovers.clear()
  }
}

export default function useNotificationList<E extends HTMLElement>(
  props: NotificationListProps,
  stackEnable: boolean,
  stackConfig: NotificationStackConfig,
) {
  const { notices, placement } = props

  const refs = useConstant(() => new NotificationListRefs())

  const forceUpdate = useForceUpdate()

  const [transforms, setTransforms] = useExactState(() => {
    return new Map<MayBe<ReactElement['key']>, CSSProperties>()
  })

  const runHoverCleanup = () => {
    const set = new Set(notices.map(e => e.key))

    const oldCount = refs.hovers.size

    refs.hovers.forEach((key) => { if (!set.has(key)) refs.hovers.delete(key) })

    if (refs.hovers.size !== oldCount) forceUpdate()
  }

  const handleMouseEnter = (key: MayBe<ReactElement['key']>) => {
    if (!stackEnable) return

    runHoverCleanup()

    refs.hovers.add(key)

    forceUpdate()
  }

  const handleMouseLeave = (key: MayBe<ReactElement['key']>) => {
    if (!stackEnable) return

    refs.hovers.delete(key)

    forceUpdate()
  }

  const applyTransforms = (exclude?: HTMLElement) => {
    const factor = placement.endsWith('Left') ? -1 : 1

    const nextTransforms = new Map<ReactElement['key'], CSSProperties>()

    getElementsStackState({ props, refs, stackEnable, stackConfig })
      .forEach(({ wrapper, delta, scale, height }, key) => {
        const dx = wrapper === exclude ? `${100 * factor}%` : '0'

        const transform = `translate3d(${dx}, ${delta}px, 0) scaleX(${scale})`

        wrapper.style.setProperty('transform', transform)

        wrapper.style.setProperty('height', isUndefined(height) ? '' : `${height}px`)

        nextTransforms.set(key, { transform, height })
      })

    setTransforms(nextTransforms)
  }

  const removeTransforms = () => {
    filterElements(refs).forEach(([_, el]) => {
      el.style.removeProperty('transform')
      el.style.removeProperty('height')
    })

    setTransforms(new Map())
  }

  const handleUpdate = () => {
    stackEnable ? applyTransforms() : removeTransforms()
  }

  const handleEnter = (el: E) => {
    if (!stackEnable) return

    runHoverCleanup()

    el.style.setProperty('transition-duration', '0s', 'important')

    applyTransforms(el)

    reflow(el)

    el.style.removeProperty('transition-duration')
  }

  const handleEntering = (el: E) => {
    if (!stackEnable) return

    el.style.setProperty('transform', `translate3d(0, 0, 0) scaleX(1)`)
  }

  const handleExit = (el: E) => {
    if (stackEnable) applyTransforms()

    el.style.setProperty('height', `${el.offsetHeight}px`)
  }

  const handleExiting = (el: E) => {
    el.style.setProperty('height', '0px')
  }

  return {
    refs,
    transforms,
    handleUpdate,
    handleMouseEnter,
    handleMouseLeave,
    handleEnter,
    handleEntering,
    handleExit,
    handleExiting,
  }
}
