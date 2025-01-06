import { cls } from '@comps/_shared/utils'

import type { BackTopProps } from '../props'

export default function useFormatClassNames(prefixCls: string, props: BackTopProps) {
  const { className, classNames = {} } = props

  return {
    root: cls(prefixCls, {}, className, classNames.root),
  }
}
