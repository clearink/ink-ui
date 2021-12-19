import { type SemanticStyledProps } from '@internal/types'
import { type ReactNode } from 'react'

export interface AlertProps extends SemanticStyledProps<'root'> {
  action?: ReactNode
  afterClose?: () => void
  closeable?: boolean
  dismissible?: boolean
  message?: ReactNode
  type?: 'error' | 'info' | 'success' | 'warning'

}
