import { useConstant, useForceUpdate } from '@comps/_shared/hooks'
import { type VoidFn } from '@internal/types'
import { useMemo } from 'react'

import { type AlertProps } from '../props'

export class AlertState {
  toLeave = false
}

export class AlertAction {
  onExit = (el: HTMLDivElement) => {}

  onExited = (el: HTMLDivElement) => {}

  onExiting = (el: HTMLDivElement) => {}

  // closeable

  constructor(private forceUpdate: VoidFn, states: AlertState) {}
}

export default function useAlertStore(props: AlertProps) {
  const update = useForceUpdate()

  const states = useConstant(() => new AlertState())

  const actions = useMemo(() => new AlertAction(update, states), [states, update])

  return { actions, states }
}
