import { cls } from '@comps/_shared/utils'

import type { PaginationProps } from '../props'

export default function useFormatClassNames(prefixCls: string, props: PaginationProps) {
  const { className, classNames = {} } = props
  return {
    root: cls(
      prefixCls,
      {},
      className,
      classNames.root,
    ),
  }
}
