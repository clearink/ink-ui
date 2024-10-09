import type { HasChildren } from '@comps/_shared/types'
import type { DOMAttributes, ReactElement } from 'react'

export interface TooltipTriggerProps extends Required<HasChildren<ReactElement>> {
  events: DOMAttributes<HTMLDivElement>

  onResize: () => void

  onScroll: () => void

  isOpen: boolean
}
