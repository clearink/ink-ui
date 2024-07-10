import { useComposeRefs, useResizeObserver } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { batch } from '@internal/utils'
import { type ForwardedRef, cloneElement, forwardRef, useEffect, useRef } from 'react'

import type { TooltipTriggerProps } from './props'

import { getScrollElements } from '../../utils/elements'

function _TooltipTrigger(props: TooltipTriggerProps, _ref: ForwardedRef<any>) {
  const { children, events, onResize, onScroll, open } = props

  const dom = useRef<Element>(null)

  useResizeObserver(dom, onResize)

  useEffect(() => {
    if (!dom.current || !open) return

    const elements = getScrollElements(dom.current)

    elements.forEach((el) => { el.addEventListener('scroll', onScroll, { passive: true }) })

    return () => { elements.forEach((el) => { el.removeEventListener('scroll', onScroll) }) }
  }, [open, onScroll])

  const ref = useComposeRefs((children as any).ref, _ref, dom)

  const cloneProps = Object.entries(events).reduce((result, [key, fn]) => {
    result[key] = batch(fn, children.props[key])

    return result
  }, {} as typeof events)

  return cloneElement(children, { ref, ...cloneProps })
}

attachDisplayName(_TooltipTrigger, 'InternalTooltip.Trigger')

const TooltipTrigger = forwardRef(_TooltipTrigger)

export default TooltipTrigger
