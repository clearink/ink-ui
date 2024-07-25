import type { WithStyleHelpers } from '@comps/_shared/components'
import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { getClientCoords, reflow } from '@internal/utils'
import { useMemo } from 'react'

import type { SegmentedType } from '../props'

export class SegmentedState {
  $group = {
    current: null as HTMLDivElement | null,
  }

  $thumb = {
    current: null as HTMLDivElement | null,
  }

  history: [SegmentedType | null, SegmentedType | null]

  inTransition = false

  items = new Map<SegmentedType | null, HTMLElement | null>()

  latest: DOMRect | null = null

  showThumb = false

  get group() {
    return this.$group.current
  }

  get thumb() {
    return this.$thumb.current
  }

  constructor(active: SegmentedType) {
    this.history = [null, active]
  }
}

export class SegmentedAction {
  handleEnter = (el: WithStyleHelpers<HTMLElement>) => {
    const { group, history, inTransition, items, latest } = this.states

    const from = items.get(history[0])

    if (!from || !group) return

    const itemCoords = inTransition && latest ? latest : getClientCoords(from)

    this.setInTransition(true)

    this.setThumbStyles(el, group, itemCoords)

    reflow(el)
  }

  handleEntering = (el: WithStyleHelpers<HTMLElement>) => {
    const { group, history, items } = this.states

    const target = items.get(history[1])

    if (!target || !group) return

    this.setThumbStyles(el, group, getClientCoords(target))
  }

  handleEntered = (el: WithStyleHelpers<HTMLElement>) => {
    el.$remove('transform')
    el.$remove('width')

    this.setShowThumb(false)
    this.setInTransition(false)
  }

  setHistory = (value: SegmentedType) => {
    const { history } = this.states

    this.states.history = [history[1], value]
  }

  setInTransition = (value: boolean) => {
    this.states.inTransition = value
  }

  setItem = (value: SegmentedType, el: HTMLElement | null) => {
    const { items } = this.states

    el ? items.set(value, el) : items.delete(value)
  }

  setShowThumb = (value: boolean) => {
    const shouldUpdate = this.states.showThumb !== value

    if (shouldUpdate) this.forceUpdate()

    this.states.showThumb = value

    return shouldUpdate
  }

  setThumbStyles = (el: WithStyleHelpers<HTMLElement>, group: HTMLElement, itemCoords: DOMRect) => {
    const groupCoords = getClientCoords(group)

    const delta = itemCoords.left - groupCoords.left

    el.$set('transform', `translate3d(${delta}px, 0, 0)`)

    el.$set('width', `${itemCoords.width}px`)
  }

  constructor(private forceUpdate: VoidFn, private states: SegmentedState) {}
}

export default function useSegmentedStore(active: SegmentedType) {
  const update = useForceUpdate()

  const states = useConstant(() => new SegmentedState(active))

  const actions = useMemo(() => new SegmentedAction(update, states), [update, states])

  const returnEarly = useWatchValue(active, () => {
    actions.setHistory(active)

    if (states.thumb && states.inTransition)
      actions.handleEntering(states.thumb as any)

    return actions.setShowThumb(true)
  })

  return { actions, returnEarly, states }
}
