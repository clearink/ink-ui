import { type OverlayProps } from '@comps/_shared/components'
import { type HasChildren, type SemanticStyledProps } from '@internal/types'
import { type ReactElement, type ReactNode } from 'react'

export interface ModalProps
  extends HasChildren,
  SemanticStyledProps<'body' | 'close' | 'footer' | 'header' | 'main' | 'root'>,
  Pick<
    OverlayProps,
      'getContainer' | 'keepMounted' | 'mask' | 'open' | 'transitions' | 'unmountOnExit' | 'zIndex'
  > {
  children?: ReactNode

  closeOnEscape?: boolean

  footer?: ReactNode

  maskClosable?: boolean

  modalRender?: (modal: ReactElement) => ReactElement

  onCancel?: () => void

  onOk?: () => void

  returnFocus?: boolean

  title?: ReactNode
}
