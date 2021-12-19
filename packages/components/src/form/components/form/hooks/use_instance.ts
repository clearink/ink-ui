import { FormContext } from '@comps/form/_shared/context'

export default function useFormInstance() {
  return FormContext.useState().form
}
