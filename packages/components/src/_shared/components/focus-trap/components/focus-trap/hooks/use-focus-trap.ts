import { keyboard } from '@comps/_shared/constants'
import { useRef } from 'react'

import focusElement from '../utils/focus-element'
import getSiblings from '../utils/get-siblings'
import trapManager from '../utils/trap-manager'

export default function useFocusTrap() {
  const $start = useRef<HTMLDivElement | null>(null)
  const $end = useRef<HTMLDivElement | null>(null)

  const isShiftTab = useRef(false)
  const latestFocus = useRef<HTMLElement | null>(null)
  const returnFocus = useRef<Element | null>(null)

  const handleFocusTrap = (root: Document) => {
    const handle = (target: HTMLElement) => {
      const containers = getSiblings($start.current!, $end.current!)

      if (!containers.length || !target) return

      const active = root.activeElement

      if (active !== $start.current && active !== $end.current) {
        if (containers.some(el => el.contains(target) || el === target)) {
          latestFocus.current = target
          return
        }

        if (latestFocus.current) return focusElement(latestFocus.current)
      }

      focusElement(isShiftTab.current ? $end.current : $start.current)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      isShiftTab.current = e.key === keyboard.tab && e.shiftKey

      handle(e.target as HTMLElement)
    }

    const onFocusIn = (e: FocusEvent) => {
      e.stopImmediatePropagation()

      handle(e.target as HTMLElement)
    }

    return trapManager.register(root, { onFocusIn, onKeyDown })
  }

  const handleCleanup = () => {
    latestFocus.current = null
    returnFocus.current = null
  }

  return {
    $start,
    $end,
    returnFocus,
    handleCleanup,
    handleFocusTrap,
  }
}
