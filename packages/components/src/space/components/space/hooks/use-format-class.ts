import { cls } from '@comps/_shared/utils'
import { isUndefined } from '@internal/utils'

import type { SpaceProps } from '../props'

export default function useFormatClass(prefixCls: string, props: SpaceProps) {
  const {
    align: _align,
    direction,
    wrap,
    className,
    classNames = {},
  } = props

  const isHorizontal = direction === 'horizontal'

  const align = isHorizontal && isUndefined(_align) ? 'center' : _align

  return {
    root: cls(
      prefixCls,
      {
        [`${prefixCls}--${direction}`]: direction && !isHorizontal,
        [`${prefixCls}--align-${align}`]: align,
        [`${prefixCls}--wrap`]: wrap,
      },
      className,
      classNames.root,
    ),
  }
}
