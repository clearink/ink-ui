import { ctxHelper } from '@comps/_shared/utils'
import { noop } from '@internal/utils'

import type { CheckboxOptionType } from './checkbox/props'

export interface CheckboxGroupContextState {
  cancelValue: (val: string) => void
  disabled?: boolean
  name?: string
  registerValue: (val: string) => void
  toggleOption?: (option: CheckboxOptionType) => void
  value?: any
}
export const CheckboxGroupContext = ctxHelper<CheckboxGroupContextState>(
  {
    cancelValue: noop,
    registerValue: noop,
  },
  'CheckboxGroupContext',
)
