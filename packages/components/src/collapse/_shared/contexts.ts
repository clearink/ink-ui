import { ctxHelper } from '@comps/_shared/utils'
import { noop } from '@internal/utils'

import type { CollapseProps, CollapsibleType, ExpandIconPosition } from '../components/collapse/props'
import type { ExpandedName } from './props'

export interface CollapseContextState {
  accordion?: CollapseProps['accordion']
  collapsible?: CollapsibleType
  disabled?: boolean
  expandIcon?: CollapseProps['expandIcon']
  expandIconPosition?: ExpandIconPosition

  expandedNames: ExpandedName[]
  keepMounted?: boolean
  onItemClick: (key: ExpandedName) => void
  unmountOnExit?: boolean
}

export const CollapseContext = ctxHelper<CollapseContextState>({
  collapsible: 'header',
  expandedNames: [],
  onItemClick: noop,
}, 'CollapseContext')
