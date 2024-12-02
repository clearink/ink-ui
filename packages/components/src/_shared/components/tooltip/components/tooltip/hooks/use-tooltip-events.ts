import type { MutableRefObject, RefObject } from 'react'

import { useDeepMemo, useEvent } from '@comps/_shared/hooks'
import { batch, getShadowRoot, makeEventListener, ownerWindow, toArray } from '@internal/utils'
import { useEffect, useMemo } from 'react'

import type { InternalTooltipProps } from '../props'

import { formatTriggerEvents, isInPopupChain } from '../utils/helpers'

export interface UseTooltipEventsOptions {
  $chain: MutableRefObject<Element[]>
  $popup: RefObject<HTMLElement>
  $trigger: RefObject<HTMLElement>
  setIsOpen: (action: (state: boolean) => boolean) => void
  trigger: InternalTooltipProps['trigger']
}

// 触发事件
export default function useTooltipEvents(options: UseTooltipEventsOptions) {
  const { $popup, $trigger, $chain, trigger, setIsOpen } = options

  const actions = useDeepMemo(() => new Set(toArray(trigger)), [trigger])

  const clickToHide = actions.has('click') || actions.has('contextMenu')

  const handleHidden = useEvent((event: MouseEvent) => {
    const isInChain = () => isInPopupChain({ $popup, $trigger, $chain, event })
    setIsOpen(isOpen => !isOpen || isInChain() ? isOpen : false)
  })

  useEffect(() => {
    const element = $trigger.current

    if (!element || !clickToHide) return

    const shadowRoot = getShadowRoot(element)

    const thisWindow = ownerWindow(element)

    return batch(
      makeEventListener(thisWindow, 'mousedown', handleHidden, true),
      makeEventListener(thisWindow, 'contextmenu', handleHidden, true),
      shadowRoot && makeEventListener(shadowRoot, 'mousedown', handleHidden, true),
      shadowRoot && makeEventListener(shadowRoot, 'contextmenu', handleHidden, true),
    )
  }, [$trigger, clickToHide, handleHidden])

  return useMemo(() => formatTriggerEvents(actions, setIsOpen), [actions, setIsOpen])
}
