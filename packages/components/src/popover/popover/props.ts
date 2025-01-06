import type { SemanticStyledProps } from '@comps/_shared/types'
import type { TooltipProps } from '@comps/tooltip'
import type { ReactNode } from 'react'

export interface PopoverProps
  extends Omit<TooltipProps, 'classNames' | 'styles'>,
  SemanticStyledProps<'arrow' | 'content' | 'root' | 'title'> {
  content?: ReactNode
  title?: ReactNode
}
