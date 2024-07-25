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

export default Form
