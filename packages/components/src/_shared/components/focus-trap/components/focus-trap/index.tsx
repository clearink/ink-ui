import type { ForwardedRef } from 'react'

import { useEvent } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'
import { ownerDocument } from '@internal/utils'
import { forwardRef, useEffect, useImperativeHandle } from 'react'

import type { FocusTrapProps, FocusTrapRef } from './props'

import { guardStyles } from '../../_shared/constants'
import useFocusTrap from './hooks/use-focus-trap'
import focusElement from './utils/focus-element'

function FocusTrap(props: FocusTrapProps, _ref: ForwardedRef<FocusTrapRef>) {
  const { active, children, onExit } = props

  const { $start, $end, returnFocus, handleCleanup, handleFocusTrap } = useFocusTrap()

  useImperativeHandle(_ref, () => ({
    focus: () => { focusElement($start.current) },
  }))

  const runFocusTrap = useEvent(() => {
    if (!active) return

    const root = ownerDocument($start.current)

    returnFocus.current = root.activeElement

    const runTrapCleanup = handleFocusTrap(root)

    return () => {
      runTrapCleanup()

      onExit?.(returnFocus.current)

      handleCleanup()
    }
  })

  useEffect(() => runFocusTrap(), [active, runFocusTrap])

  return (
    <>
      <div ref={$start} style={guardStyles} tabIndex={active ? 0 : -1} />
      {children}
      <div ref={$end} style={guardStyles} tabIndex={active ? 0 : -1} />
    </>
  )
}

betterDisplayName(FocusTrap)

export default forwardRef(FocusTrap)
