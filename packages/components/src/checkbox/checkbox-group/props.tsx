import type { SemanticStyledProps } from '@comps/_shared/types'
import type { ReactNode } from 'react'

export interface CheckboxGroupProps extends SemanticStyledProps<'root' | 'text'> {
  children?: ReactNode
}
