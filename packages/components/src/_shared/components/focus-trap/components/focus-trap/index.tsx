import type { ForwardedRef } from 'react'

import { useEvent } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'
import { ownerDocument } from '@internal/utils'
import { forwardRef, useEffect, useImperativeHandle } from 'react'

import type { FocusTrapProps, FocusTrapRef } from './props'

import { guardStyles } from '../../_shared/constants'
import useFocusTrapStore from './hooks/use-focus-trap-store'
import focusElement from './utils/focus-element'

function FocusTrap(props: FocusTrapProps, _ref: ForwardedRef<FocusTrapRef>) {
  const { active, children, onExit } = props

  const { states, actions } = useFocusTrapStore()

  useImperativeHandle(_ref, () => ({
    focus: () => { focusElement(states.$start.current) },
  }))

  const runFocusTrap = useEvent(() => {
    if (!active) return

    const root = ownerDocument(states.$start.current)

    states.returnFocus = root.activeElement

    const runTrapCleanup = actions.handleFocusTrap(root)

    return () => {
      runTrapCleanup()

      onExit?.(states.returnFocus)

      actions.handleCleanup()
    }
  })

  useEffect(() => runFocusTrap(), [active, runFocusTrap])

  return (
    <>
      <div ref={states.$start} style={guardStyles} tabIndex={active ? 0 : -1} />
      {children}
      <div ref={states.$end} style={guardStyles} tabIndex={active ? 0 : -1} />
    </>
  )
}

betterDisplayName(FocusTrap)

export default forwardRef(FocusTrap)
