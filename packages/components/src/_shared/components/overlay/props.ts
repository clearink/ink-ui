import { type SemanticStyledProps } from '@internal/types'
import { type RefCallback } from 'react'

import { type PortalProps, type PortalRef } from '../portal/props'
import { type CSSTransitionProps } from '../transition/_shared/props'

export type OverlayRef = PortalRef

export interface OverlayProps
  extends SemanticStyledProps<'mask' | 'root'>,
  Pick<PortalProps, 'getContainer'>,
  Pick<
    CSSTransitionProps,
      'onEnter' | 'onEntered' | 'onEntering' | 'onExit' | 'onExited' | 'onExiting'
  > {
  children: ((ref: RefCallback<HTMLDivElement>) => React.ReactElement) | React.ReactElement

  keepMounted?: boolean

  mask?: boolean

  open?: boolean

  transitions?: { content?: string; mask?: string }

  unmountOnExit?: boolean

  zIndex?: number
}
