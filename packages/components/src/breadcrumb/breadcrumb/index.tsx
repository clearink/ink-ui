import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'

import type { BreadcrumbProps } from './props'

import useFormatClassNames from './hooks/use-format-class-names'

function Breadcrumb(props: BreadcrumbProps) {
  const prefixCls = usePrefixCls('breadcrumb')

  const classNames = useFormatClassNames(prefixCls, props)

  return <div className={classNames.root}>breadcrumb</div>
}

betterDisplayName(Breadcrumb)

export default Breadcrumb
