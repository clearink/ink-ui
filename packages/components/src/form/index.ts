import { List as InternalList, useWatch } from '@comps/_shared/components'

import ErrorList from './components/error-list'
import _Form from './components/form'
import useForm from './components/form/hooks/use-form'
import useFormInstance from './components/form/hooks/use-instance'
import FormItem from './components/item'
import useFormItemStatus from './components/item/hooks/use-item-status'

// CompoundedForm
const Form = Object.assign(_Form, {
  ErrorList,
  Item: Object.assign(FormItem, { useStatus: useFormItemStatus }),
  List: InternalList,
  useForm,
  useFormInstance,
  useWatch,
})

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { FormErrorListProps } from './components/error-list/props'
export type { FormInstance, FormProps } from './components/form/props'
export type { FormItemProps } from './components/item/props'
export type { InternalFormListProps as FormListProps } from '@comps/_shared/components'

export { Form }
export default Form
