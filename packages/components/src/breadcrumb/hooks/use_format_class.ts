import { usePrefixCls } from '@comps/_shared/hooks'
import { cls } from '@comps/_shared/utils'

// import { BreadcrumbProps } from '../props';

export default function useFormatClass() {
  const prefixCls = usePrefixCls('breadcrumb')
  return cls(prefixCls)
}
