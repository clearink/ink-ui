import type { VoidFn } from '@internal/types'

import { useConstant, useForceUpdate } from '@comps/_shared/hooks'
import { removeItem } from '@internal/utils'
import { useMemo } from 'react'

import type { ArrowCoords, InternalTooltipProps, PopupCoords } from '../props'

import aligners from '../utils/aligner'

export class TooltipState {
  $popup = {
    current: null as HTMLDivElement | null,
  }

  $trigger = {
    current: null as HTMLElement | null,
  }

  arrowCoords: Partial<ArrowCoords> = {}

  popupCoords: Partial<PopupCoords> = { transform: `translate3d(-1000vw,-1000vh,0)` }

  popups: Element[] = []

  get popup() {
    return this.$popup.current
  }

  get trigger() {
    return this.$trigger.current
  }
}

export class TooltipAction {
  constructor(private forceUpdate: VoidFn, private states: TooltipState) {}

  private setArrowCoords = (value: ArrowCoords | null) => {
    if (!value) return

    this.states.arrowCoords = value

    this.forceUpdate()
  }

  private setPopupCoords = (value: null | PopupCoords) => {
    if (!value) return

    this.states.popupCoords = value

    this.forceUpdate()
  }

  updateCoords = (props: InternalTooltipProps) => {
    const { arrowCoords, popup, popupCoords, trigger } = this.states

    if (!popup || !trigger) return

    const getCoords = aligners[props.placement!] || aligners.top

    const [getArrowCoords, getPopupCoords] = getCoords(props, popup, trigger)

    this.setArrowCoords(getArrowCoords(arrowCoords))

    this.setPopupCoords(getPopupCoords(popupCoords))
  }

  appendPopupItem = (el: Element) => {
    this.states.popups.push(el)
  }

  removePopupItem = (el: Element) => {
    removeItem(this.states.popups, el)
  }
}

export default function useTooltipStore() {
  const update = useForceUpdate()

  const states = useConstant(() => new TooltipState())

  const actions = useMemo(() => new TooltipAction(update, states), [update, states])

  return { actions, states }
}
