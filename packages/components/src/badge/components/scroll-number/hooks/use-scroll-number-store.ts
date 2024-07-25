import type { WithStyleHelpers } from '@comps/_shared/components/transition/components/css-transition/props'
import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { getClientCoords, reflow } from '@internal/utils'
import { useMemo } from 'react'

import type { ScrollNumberProps } from '../props'

export class ScrollNumberState {
  $wrapper = {
    current: null as HTMLDivElement | null,
  }

  history: [null | string, string]

  items = new Map<null | string, HTMLElement | null>()

  showRawChar = true

  get wrapper() {
    return this.$wrapper.current
  }

  constructor(char: string) {
    this.history = [null, char]
  }
}

export class ScrollNumberAction {
  onEnter = (el: WithStyleHelpers<HTMLDivElement>) => {
    const { history, items, wrapper } = this.states

    const item = items.get(history[0])

    if (!wrapper || !item) return

    this.setOffsetStyles(el, wrapper, item)

    reflow(el)
  }

  onEntering = (el: WithStyleHelpers<HTMLDivElement>) => {
    const { history, items, wrapper } = this.states

    const item = items.get(history[1])

    if (!wrapper || !item) return

    this.setOffsetStyles(el, wrapper, item)
  }

  onEntered = () => {
    this.setShowRawChar(true)
  }

  setHistory = (char: string) => {
    const { history } = this.states

    this.states.history = [history[1], char]
  }

  setItem = (key: string, el: HTMLElement | null) => {
    this.states.items.set(key, el)
  }

  setOffsetStyles = (el: WithStyleHelpers<HTMLElement>, wrapper: HTMLElement, item: HTMLElement) => {
    const wrapCoords = getClientCoords(wrapper)

    const itemCoords = getClientCoords(item)

    const delta = wrapCoords.top - itemCoords.top

    el.$set('transform', `translate3d(0, ${delta}px, 0)`)
  }

  setShowRawChar = (value: boolean) => {
    const shouldUpdate = this.states.showRawChar !== value

    if (shouldUpdate) this.forceUpdate()

    this.states.showRawChar = value

    return shouldUpdate
  }

  constructor(public forceUpdate: VoidFn, private states: ScrollNumberState) {}
}

export default function useScrollNumberStore(props: ScrollNumberProps) {
  const { char } = props

  const update = useForceUpdate()

  const states = useConstant(() => new ScrollNumberState(char))

  const actions = useMemo(() => new ScrollNumberAction(update, states), [update, states])

  const returnEarly = useWatchValue(char, () => {
    actions.setHistory(char)

    return actions.setShowRawChar(false)
  })

  return { actions, returnEarly, states }
}
