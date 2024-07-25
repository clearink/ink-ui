import type { VoidFn } from '@internal/types'
import type { ReactElement } from 'react'

import type { CssTransitionProps as CssProps } from '../css-transition/props'
import type { TransitionState } from './hooks/use-transition-store'

export interface GroupTransitionProps<E extends HTMLElement> extends Omit<CssProps<E>, 'children' | 'unmountOnExit' | 'when'> {
  children: CssProps<E>['children'][]

  onFinished?: VoidFn
}

export interface GroupTransitionRef<E extends HTMLElement = HTMLElement> {
  components: TransitionState<E>['components']
}

export interface GroupElementItem {
  freeze: boolean
  node: ReactElement
  key: ReactElement['key']
}
