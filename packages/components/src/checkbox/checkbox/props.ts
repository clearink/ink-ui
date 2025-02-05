import type { HasChildren, SemanticStyledProps } from '@comps/_shared/types'

export interface CheckboxProps extends HasChildren, SemanticStyledProps<'inner' | 'input' | 'label' | 'root'> {
  autoFocus?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  indeterminate?: boolean
  onChange?: (checked: boolean) => void
}

export interface CheckboxOptionType {}
