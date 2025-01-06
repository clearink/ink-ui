import { Tooltip as InternalTooltip } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { betterDisplayName, cls } from '@comps/_shared/utils'
import { fallback } from '@internal/utils'

import type { TooltipProps } from './props'

function Tooltip(props: TooltipProps) {
  const { transition, classNames = {} } = props

  const rootPrefixCls = usePrefixCls()

  const prefixCls = `${rootPrefixCls}-tooltip`

  return (
    <InternalTooltip
      {...props}
      transition={fallback(transition, `${rootPrefixCls}-zoom-fast`)}
      classNames={{
        root: cls(prefixCls, classNames.root),
        arrow: cls(`${prefixCls}__arrow`, classNames.arrow),
        wrapper: cls(`${prefixCls}-wrapper`, classNames.wrapper),
      }}
    />
  )
}

betterDisplayName(Tooltip)

export default Tooltip
