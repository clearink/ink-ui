import { type SizeType } from '@comps/_shared/contexts'
import { type SemanticStyledProps } from '@internal/types'
import { type HTMLAttributes, type ReactNode } from 'react'

type SpaceSize = SizeType | number
export interface SpaceProps extends SemanticStyledProps<'root'>, HTMLAttributes<HTMLDivElement> {
  align?: 'baseline' | 'center' | 'end' | 'start'
  direction?: 'horizontal' | 'vertical'
  size?: [SpaceSize, SpaceSize] | SpaceSize
  split?: ReactNode
  wrap?: boolean
}
