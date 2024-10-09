import Field from './components/field'
import InternalForm from './components/form'
import useForm from './components/form/hooks/use-form'
import useWatch from './components/form/hooks/use-watch'
import List from './components/list'
import Provider from './components/provider'

// CompoundedForm
const Form = Object.assign(InternalForm, {
  Field,
  List,
  Provider,
  useForm,
  useWatch,
})

/**
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 * |                    export definition                    |
 * |---------------------------------------------------------|
 * |---------------------------------------------------------|
 */

export type { ExternalFieldData, ExternalFieldMeta, ExternalNamePath } from './_shared/props'
export type * from './components/field/props'
export type * from './components/form/control/props'
export type * from './components/form/props'
export type * from './components/list/control/props'
export type * from './components/list/props'
export type * from './components/provider/props'

export { Field, Form, List, Provider, useForm, useWatch }

export default Form
