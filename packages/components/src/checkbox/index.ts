import CheckboxGroup from './components/check-group'
import _Checkbox from './components/checkbox'

// CompoundCheckbox
const Checkbox = Object.assign(_Checkbox, { Group: CheckboxGroup })

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { CheckboxProps } from './components/checkbox/props'

export { Checkbox }
export default Checkbox
