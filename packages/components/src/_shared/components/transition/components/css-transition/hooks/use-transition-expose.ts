import type { ForwardedRef } from 'react'

import { useImperativeHandle } from 'react'

import type { CssTransitionRef } from '../props'
import type { TransitionState } from './use-transition-store'

import { isEntered, isEntering, isExited, isExiting } from '../constants'

export default function useTransitionExpose<E extends HTMLElement>(
  ref: ForwardedRef<CssTransitionRef<E>>,
  states: TransitionState<E>,
) {
  useImperativeHandle(ref, () => ({
    get element() { return states.instance },
    get status() { return states.status },
    get isEntering() { return isEntering(states.status) },
    get isEntered() { return isEntered(states.status) },
    get isExiting() { return isExiting(states.status) },
    get isExited() { return isExited(states.status) },
  }), [states])
}
