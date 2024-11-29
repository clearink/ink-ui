import type { ForwardedRef } from 'react'

import { useComposeRefs, useEvent } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'
import { ownerDocument } from '@internal/utils'
import { cloneElement, forwardRef, useEffect, useImperativeHandle } from 'react'

import type { FocusTrapProps, FocusTrapRef } from './props'

import { guardStyles } from '../../_shared/constants'
import useFocusTrapStore from './hooks/use-trap-store'

function FocusTrap(props: FocusTrapProps, _ref: ForwardedRef<FocusTrapRef>) {
  const { active, children, onExit } = props

  const { actions, states } = useFocusTrapStore()

  const ref = useComposeRefs(states.$content, (children as any).ref)

  const runFocusTrap = useEvent((active: FocusTrapProps['active']) => {
    if (!active || !states.$content) return

    const root = ownerDocument(states.$start.current)

    actions.setReturnFocus(root.activeElement)

    const runTrapCleanup = actions.onFocusTrap(root)

    return () => {
      runTrapCleanup()

      onExit?.(states.returnFocus)

      actions.onCleanup()
    }
  })

  useImperativeHandle(_ref, () => ({
    focus: () => { actions.focusElement(states.$start.current) },
  }))

  useEffect(() => runFocusTrap(active), [active, runFocusTrap])

  const tabIndex = active ? 0 : -1

  return (
    <>
      <div
        ref={states.$start}
        style={guardStyles}
        tabIndex={tabIndex}
      />
      {cloneElement(children, { ref })}
      <div
        ref={states.$end}
        style={guardStyles}
        tabIndex={tabIndex}
      />

    </>
  )
}

betterDisplayName(FocusTrap)

export default forwardRef(FocusTrap)
