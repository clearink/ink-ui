import { useDeepMemo } from '@comps/_shared/hooks'
import { batch, getShadowRoot, makeEventListener, ownerWindow, toArray } from '@internal/utils'
import { useEffect, useMemo } from 'react'

import type { InternalTooltipProps } from '../props'
import type useTooltipOpen from './use-tooltip-open'
import type { TooltipState } from './use-tooltip-store'

import { formatTriggerEvents, isInPopupChain } from '../utils/helpers'

// 触发事件
export default function useTooltipEvents(
  props: InternalTooltipProps,
  states: TooltipState,
  setIsOpen: ReturnType<typeof useTooltipOpen>[1],
) {
  const { trigger } = props

  const actions = useDeepMemo(() => new Set(toArray(trigger)), [trigger])

  const clickToHide = actions.has('click') || actions.has('contextMenu')

  useEffect(() => {
    const element = states.trigger

    if (!element || !clickToHide) return

    const handler = (event: MouseEvent) => {
      setIsOpen(state => (!state || isInPopupChain(states, event) ? state : false))
    }

    const shadowRoot = getShadowRoot(element)

    const thisWindow = ownerWindow(element)

    return batch(
      makeEventListener(thisWindow, 'mousedown', handler, true),
      makeEventListener(thisWindow, 'contextmenu', handler, true),
      shadowRoot && makeEventListener(shadowRoot, 'mousedown', handler, true),
      shadowRoot && makeEventListener(shadowRoot, 'contextmenu', handler, true),
    )
  }, [states, clickToHide, setIsOpen])

  return useMemo(() => formatTriggerEvents(actions, setIsOpen), [actions, setIsOpen])
}
