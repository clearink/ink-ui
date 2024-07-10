import { useComposeRefs, useResizeObserver } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { ownerWindow } from '@internal/utils'
import { type ForwardedRef, cloneElement, forwardRef, useEffect, useRef } from 'react'

import type { TooltipContentProps } from './props'

import { getScrollElements } from '../../utils/elements'

function _TooltipContent(props: TooltipContentProps, _ref: ForwardedRef<any>) {
  const { children, onMounted, onResize, onScroll, open } = props

  const dom = useRef<Element>(null)

  useResizeObserver(dom, onResize)

  useEffect(() => onMounted(dom.current), [onMounted])

  useEffect(() => {
    if (!dom.current || !open) return

    const elements = new Set([...getScrollElements(dom.current), ownerWindow(dom.current)])

    elements.forEach((el) => { el.addEventListener('scroll', onScroll, { passive: true }) })

    return () => { elements.forEach((el) => { el.removeEventListener('scroll', onScroll) }) }
  }, [open, onScroll])

  const ref = useComposeRefs((children as any).ref, _ref, dom)

  return cloneElement(children, { ref })
}

attachDisplayName(_TooltipContent, 'InternalTooltip.Content')

const TooltipContent = forwardRef(_TooltipContent)

export default TooltipContent
