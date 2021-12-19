import { type SemanticStyledProps } from '@internal/types'
import { type HTMLAttributes } from 'react'

export interface IconWrapProps extends SemanticStyledProps<'root'>,
  HTMLAttributes<HTMLSpanElement> {}
