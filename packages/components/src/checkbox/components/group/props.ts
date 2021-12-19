import { type SemanticStyledProps } from '@internal/types'
import { type ReactNode } from 'react'

export interface CheckboxGroupProps extends SemanticStyledProps<'root' | 'text'> {
  children?: ReactNode
}
