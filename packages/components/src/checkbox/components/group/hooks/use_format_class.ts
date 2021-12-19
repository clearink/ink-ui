import { cls } from '@comps/_shared/utils'

import { type CheckboxGroupProps } from '../props'

export default function useFormatClass(prefixCls: string, props: CheckboxGroupProps) {
  const { className } = props

  return cls(prefixCls, {}, className)
}
