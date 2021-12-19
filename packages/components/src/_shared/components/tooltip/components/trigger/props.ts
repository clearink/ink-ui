import { type HasChildren } from '@internal/types'
import { type DOMAttributes, type ReactElement } from 'react'

export interface TooltipTriggerProps extends Required<HasChildren<ReactElement>> {
  events: DOMAttributes<HTMLDivElement>

  onResize: () => void

  onScroll: () => void

  open: boolean
}
