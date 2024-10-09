import { cls } from '@comps/_shared/utils'

import type { RowProps } from '../props'

export default function useFormatClass(prefixCls: string, props: RowProps) {
  const { align, className, justify, wrap, classNames = {} } = props

  return {
    root: cls(
      prefixCls,
      {
        [`${prefixCls}--${align}`]: align,
        [`${prefixCls}--${justify}`]: justify,
        [`${prefixCls}--wrap`]: wrap,
      },
      className,
      classNames.root,
    ),
  }
}
