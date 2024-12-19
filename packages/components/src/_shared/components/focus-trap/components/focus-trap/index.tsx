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

  const { refs, handleCleanup, handleFocusTrap } = useFocusTrap()

  useImperativeHandle(_ref, () => ({
    focus: () => { focusElement(refs.start) },
  }))

  const runFocusTrap = useEvent(() => {
    if (!active) return

    const root = ownerDocument(refs.start)

    refs.returnFocus = root.activeElement

    const runTrapCleanup = handleFocusTrap(root)

    return () => {
      runTrapCleanup()

      onExit?.(refs.returnFocus)

      handleCleanup()
    }
  })

  useEffect(() => runFocusTrap(), [active, runFocusTrap])

  return (
    <>
      <div ref={refs.$start} style={guardStyles} tabIndex={active ? 0 : -1} />
      {children}
      <div ref={refs.$end} style={guardStyles} tabIndex={active ? 0 : -1} />
    </>
  )
}

betterDisplayName(FocusTrap)

export default forwardRef(FocusTrap)
