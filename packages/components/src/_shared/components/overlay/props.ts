import type { SemanticStyledProps } from '@comps/_shared/types'
import type { RefCallback } from 'react'

import type { PortalProps, PortalRef } from '../portal/props'
import type { CssTransitionProps as CssProps } from '../transition/_shared/props'

export type OverlayRef = PortalRef

export interface OverlayProps
  extends SemanticStyledProps<'mask' | 'root'>,
  Pick<PortalProps, 'getContainer'>,
  Pick<CssProps, 'onEnter' | 'onEntered' | 'onEntering' | 'onExit' | 'onExited' | 'onExiting'> {
  children: ((ref: RefCallback<HTMLDivElement>) => React.ReactElement) | React.ReactElement

  keepMounted?: boolean

  mask?: boolean

  open?: boolean

  transitions?: { content?: string, mask?: string }

  unmountOnExit?: boolean

  zIndex?: number
}

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                      default props                      |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export const defaultOverlayProps: Partial<OverlayProps> = {
  mask: true,
}
