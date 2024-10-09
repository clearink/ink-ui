import _Button from './components/button'
import ButtonGroup from './components/button-group'

// CompoundButton
const Button = Object.assign(_Button, { Group: ButtonGroup })

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { ButtonProps } from './components/button/props'
export type { ButtonGroupProps } from './components/button-group/props'

export { Button }
export default Button
