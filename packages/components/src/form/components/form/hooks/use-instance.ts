import { FormContext } from '../../../_shared/contexts'

export default function useFormInstance() {
  return FormContext.useState().form
}
