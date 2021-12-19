import { usePrefixCls } from '@comps/_shared/hooks'
import { cls } from '@comps/_shared/utils'

import { type BackTopProps } from '../props'

export default function useFormatClass(props: BackTopProps) {
  const { className } = props
  const prefixCls = usePrefixCls('back-top')
  return cls(prefixCls, className)
}
