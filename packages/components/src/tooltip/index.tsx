import { Tooltip as InternalTooltip } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName, cls } from '@comps/_shared/utils'
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
      }}
    />
  )
}

attachDisplayName(Tooltip)

export default Tooltip
