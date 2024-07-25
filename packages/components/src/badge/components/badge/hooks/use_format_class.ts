import { cls } from '@comps/_shared/utils'

import type { BadgeProps } from '../props'

export default function useFormatClass(prefixCls: string, props: BadgeProps) {
  const { className } = props

  return {
    indicator: cls(`${prefixCls}__indicator`),
    root: cls(prefixCls, {}, className),
  }
}
