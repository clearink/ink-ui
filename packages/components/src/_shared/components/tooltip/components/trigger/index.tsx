import { useComposeRefs, useResizeObserver } from '@comps/_shared/hooks'
import { withDisplayName } from '@comps/_shared/utils'
import { batch } from '@internal/utils'
import { type ForwardedRef, cloneElement, forwardRef, useEffect, useRef } from 'react'

import { getScrollElements } from '../../utils/elements'
import { type TooltipTriggerProps } from './props'

function TooltipTrigger(props: TooltipTriggerProps, _ref: ForwardedRef<any>) {
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

  const cloneProps = Object.entries(events).reduce(
    (result, [key, fn]) => {
      result[key] = batch(fn, children.props[key])

      return result
    },
    {} as typeof events,
  )

  return cloneElement(children, { ref, ...cloneProps })
}

export default forwardRef(withDisplayName(TooltipTrigger))
