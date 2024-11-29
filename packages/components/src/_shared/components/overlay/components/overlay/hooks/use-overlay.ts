import type { CssTransitionRef as CssRef } from '@comps/_shared/components/transition'

import { useForceUpdate, useWatchValue } from '@comps/_shared/hooks'
import { useRef, useState } from 'react'

import type { OverlayProps } from '../props'

export default function useOverlay(props: OverlayProps) {
  const { isOpen, keepMounted, unmountOnExit } = props

  const $content = useRef<CssRef | null>(null)

  const forceUpdate = useForceUpdate()
  const [isMounted, setIsMounted] = useState(!!(keepMounted || isOpen))

  // 监听 keepMounted, unmountOnExit
  const returnEarly1 = useWatchValue(`${keepMounted}-${unmountOnExit}`, () => {
    // keepMounted 优先级高于 unmountOnExit
    let newIsMounted = isMounted

    const isExited = $content.current?.isExited

    if (keepMounted) newIsMounted = true
    else if (unmountOnExit && isExited) newIsMounted = false

    isMounted !== newIsMounted && setIsMounted(newIsMounted)

    return isMounted !== newIsMounted
  })

  // isOpen 变化时需要保证页面处于渲染中,
  const returnEarly2 = useWatchValue(isOpen, () => {
    const newIsMounted = true

    setIsMounted(newIsMounted)
    forceUpdate()

    return isMounted !== newIsMounted
  })

  return {
    $content,
    isMounted,
    setIsMounted,
    returnEarly: returnEarly1 || returnEarly2,
  }
}
