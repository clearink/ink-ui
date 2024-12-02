import type { CssTransitionRef as CssRef } from '@comps/_shared/components/transition'

import { useExactState, useWatchValue2 } from '@comps/_shared/hooks'
import { useRef } from 'react'

import type { OverlayProps } from '../props'

export default function useOverlay(props: OverlayProps) {
  const { isOpen, keepMounted, unmountOnExit } = props

  const $content = useRef<CssRef | null>(null)

  const [isMounted, setIsMounted] = useExactState(!!(keepMounted || isOpen))

  // 监听 keepMounted, unmountOnExit
  const returnEarly1 = useWatchValue2(`${keepMounted}-${unmountOnExit}`, () => {
    // keepMounted 优先级高于 unmountOnExit
    let newIsMounted = isMounted

    const isExited = $content.current?.isExited

    if (keepMounted) newIsMounted = true
    else if (unmountOnExit && isExited) newIsMounted = false

    setIsMounted(newIsMounted)
  })

  // isOpen 变化时需要保证页面处于渲染中,
  const returnEarly2 = useWatchValue2(isOpen, () => { setIsMounted(true) })

  return {
    $content,
    isMounted,
    setIsMounted,
    returnEarly: returnEarly1 || returnEarly2,
  }
}
