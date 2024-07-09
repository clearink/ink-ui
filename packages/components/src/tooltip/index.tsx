import { Tooltip as InternalTooltip } from '@comps/_shared/components'
import { usePrefixCls } from '@comps/_shared/hooks'
import { withDisplayName } from '@comps/_shared/utils'
import { fallback } from '@internal/utils'

import useFormatClass from './hooks/use_format_class'
import { type TooltipProps } from './props'

function Tooltip(props: TooltipProps) {
  const { transition } = props

  const rootPrefixCls = usePrefixCls()

  const prefixCls = `${rootPrefixCls}-tooltip`

  const classNames = useFormatClass(prefixCls, props)

  return (
    <InternalTooltip
      {...props}
      classNames={classNames}
      transition={fallback(transition, `${rootPrefixCls}-zoom-fast`)}
    />
  )
}

export default withDisplayName(Tooltip)
