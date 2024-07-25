import { cls } from '@comps/_shared/utils'

import type { PaginationProps } from '../props'

export default function useFormatClass(prefixCls: string, props: PaginationProps) {
  const { className } = props
  return cls(prefixCls, className)
}
