import { cls } from '@comps/_shared/utils'

import type { FormItemProps } from '../props'

export default function useFormatClassNames(prefixCls: string, props: FormItemProps) {
  const { className, hidden } = props

  return {
    root: cls(prefixCls, hidden && `${prefixCls}--hidden`, className),
  }
}
