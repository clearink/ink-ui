import { attachDisplayName } from '@comps/_shared/utils'

import type { TooltipArrowProps } from './props'

function TooltipArrow(props: TooltipArrowProps) {
  const { className, show, style } = props

  return show ? <div className={className} style={style} /> : null
}

attachDisplayName(TooltipArrow, 'InternalTooltip.Arrow')

export default TooltipArrow
