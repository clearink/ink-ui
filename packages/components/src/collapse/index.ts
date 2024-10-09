import _Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'

// CompoundCollapse
const Collapse = Object.assign(_Collapse, { Item: CollapseItem })

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { CollapseProps } from './components/collapse/props'
export type { CollapseItemProps } from './components/collapse-item/props'

export { Collapse }
export default Collapse
