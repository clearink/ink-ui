import _Pagination from './components/pagination'
import PaginationItem from './components/pagination-item'

const Pagination = Object.assign(_Pagination, { Item: PaginationItem })

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { PaginationProps } from './components/pagination/props'
export type { PaginationItemProps } from './components/pagination-item/props'

export { Pagination }
export default Pagination
