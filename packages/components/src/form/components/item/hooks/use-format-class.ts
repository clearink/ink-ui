import { cls } from '@comps/_shared/utils'

import type { FormItemProps } from '../props'

export default function useFormatClass(prefixCls: string, props: FormItemProps) {
  const { className, hidden } = props

  return cls(prefixCls, hidden && `${prefixCls}--hidden`, className)
}
