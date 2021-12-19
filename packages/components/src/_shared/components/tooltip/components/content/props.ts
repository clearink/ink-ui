import { type HasChildren } from '@internal/types'
import { type ReactElement } from 'react'

export interface TooltipContentProps extends Required<HasChildren<ReactElement>> {
  onMounted: (el: Element | null) => () => void

  onResize: () => void

  onScroll: () => void

  open: boolean
}
