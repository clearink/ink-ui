import _Badge from './components/badge'
import Ribbon from './components/ribbon'

const Badge = Object.assign(_Badge, { Ribbon })

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { BadgeProps } from './components/badge/props'
export type { BadgeRibbonProps } from './components/ribbon/props'

export { Badge }
export default Badge
