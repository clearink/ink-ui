import { List as InternalList, useWatch } from '@comps/_shared/components'

import ErrorList from './components/error-list'
import _Form from './components/form'
import useForm from './components/form/hooks/use_form'
import useFormInstance from './components/form/hooks/use_instance'
import FormItem from './components/item'
import useFormItemStatus from './components/item/hooks/use_item_status'

// CompoundedForm
const Form = Object.assign(_Form, {
  ErrorList,
  Item: Object.assign(FormItem, { useFormItemStatus }),
  List: InternalList,
  useForm,
  useFormInstance,
  useWatch,
})

export default Form
