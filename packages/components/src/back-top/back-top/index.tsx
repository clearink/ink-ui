import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName } from '@comps/_shared/utils'

import type { BackTopProps } from './props'

import useFormatClassNames from './hooks/use-format-class-names'

function BackTop(props: BackTopProps) {
  const prefixCls = usePrefixCls('back-top')

  const classNames = useFormatClassNames(prefixCls, props)

  return <div className={classNames.root}>back-top</div>
}

betterDisplayName(BackTop)

export default BackTop