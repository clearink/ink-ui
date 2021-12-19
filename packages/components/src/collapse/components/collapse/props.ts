import { type SizeType } from '@comps/_shared/contexts'
import { type HasChildren, type SemanticStyledProps } from '@internal/types'
import { type ReactNode, type RefObject } from 'react'

import { type ExpandedName } from '../../props'
import { type CollapseItemProps } from '../item/props'

export type CollapseItemType = {
  ref?: RefObject<HTMLDivElement>
} & CollapseItemProps

export type CollapsibleType = 'header' | 'icon' | 'title'
export type ExpandIconPosition = 'end' | 'start'
export interface CollapseProps<K extends ExpandedName = ExpandedName>
  extends HasChildren,
  SemanticStyledProps<'root'> {
  accordion?: boolean
  bordered?: boolean
  collapsible?: CollapsibleType
  defaultExpandedNames?: K | K[]
  disabled?: boolean
  expandIcon?: ((props: { expanded: boolean; name: K }) => ReactNode) | ReactNode
  expandIconPosition?: ExpandIconPosition
  expandedNames?: K | K[]
  ghost?: boolean
  items?: CollapseItemType[]

  keepMounted?: boolean
  onChange?: (expandedName: K, ExpandedNames: K[]) => void
  size?: SizeType
  unmountOnExit?: boolean
}
