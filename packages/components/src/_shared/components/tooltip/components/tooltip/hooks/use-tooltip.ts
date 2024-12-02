import { useEvent, useExactState } from '@comps/_shared/hooks'
import { noop, pushItem, removeItem } from '@internal/utils'
import { useRef } from 'react'

import type { ArrowCoords, InternalTooltipProps, PopupCoords } from '../props'

import aligners from '../utils/aligner'

export default function useTooltip() {
  const $popup = useRef<HTMLDivElement>(null)
  const $trigger = useRef<HTMLElement>(null)
  const $chain = useRef<Element[]>([])

  const [arrowCoords, setArrowCoords] = useExactState<Partial<ArrowCoords>>({})
  const [popupCoords, setPopupCoords] = useExactState<Partial<PopupCoords>>({
    transform: `translate3d(-1000vw, -1000vh, 0)`,
  })

  const updateCoords = useEvent((props: InternalTooltipProps) => {
    const { placement } = props

    const popup = $popup.current

    const trigger = $trigger.current

    if (!popup || !trigger) return

    const getCoords = aligners[placement!] || aligners.top

    const [getArrowCoords, getPopupCoords] = getCoords(props, popup, trigger)

    setArrowCoords(getArrowCoords(arrowCoords))

    setPopupCoords(getPopupCoords(popupCoords))
  })

  const currentContext = useEvent((el: Element | null) => {
    if (!el) return noop

    pushItem($chain.current, el)

    return () => { removeItem($chain.current, el) }
  })

  return {
    $chain,
    $popup,
    $trigger,
    arrowCoords,
    setArrowCoords,
    popupCoords,
    setPopupCoords,
    updateCoords,
    currentContext,
  }
}
