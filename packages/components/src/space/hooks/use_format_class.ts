import { cls } from '@comps/_shared/utils'
import { isUndefined } from '@internal/utils'

import { type SpaceProps } from '../props'

export default function useFormatClass(prefixCls: string, props: SpaceProps) {
  const { align: _align, className, direction, wrap } = props

  const align = direction === 'horizontal' && isUndefined(_align) ? 'center' : _align

  return cls(
    prefixCls,
    {
      [`${prefixCls}--${direction}`]: direction && direction !== 'horizontal',
      [`${prefixCls}--align-${align}`]: align,
      [`${prefixCls}--wrap`]: wrap,
    },
    className,
  )
}
