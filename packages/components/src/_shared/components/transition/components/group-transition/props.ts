import type { VoidFn } from '@internal/types'
import type { ReactElement } from 'react'

import type { CSSTransitionProps } from '../css-transition/props'

export interface GroupTransitionProps<E extends HTMLElement = HTMLElement>
  extends Omit<CSSTransitionProps<E>, 'children' | 'unmountOnExit' | 'when'> {
  children: ReactElement[]

  flip?: boolean

  onExitComplete?: () => void
}

export interface FlipState {
  coords: Map<ReactElement['key'], DOMRect>
  cancels: VoidFn[]
}
