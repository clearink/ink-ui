import { cls } from '@comps/_shared/utils'

import type { BreadcrumbProps } from '../props'

export default function useFormatClassNames(prefixCls: string, props: BreadcrumbProps) {
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
