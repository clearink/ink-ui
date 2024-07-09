import { BREAKPOINT_NAME } from '@comps/_shared/hooks/use-breakpoint/breakpoint'
import { cls } from '@comps/_shared/utils'
import { isObject, isUndefined } from '@internal/utils'
import { useMemo } from 'react'

import { type ColProps } from '../props'

export default function useFormatClass(prefixCls: string, props: ColProps) {
  const { className, offset, order, pull, push, span } = props

  return useMemo(() => {
    const extraClass = BREAKPOINT_NAME.reduce((res, size) => {
      const breakpoint = props[size]

      if (isUndefined(breakpoint)) return res

      if (isObject(breakpoint)) {
        res[`${prefixCls}-${size}-${breakpoint.span}`] = breakpoint.span
        res[`${prefixCls}-${size}-${breakpoint.offset}`] = breakpoint.offset
        res[`${prefixCls}-${size}-${breakpoint.pull}`] = breakpoint.pull
        res[`${prefixCls}-${size}-${breakpoint.push}`] = breakpoint.push
        res[`${prefixCls}-${size}-${breakpoint.order}`] = breakpoint.order
        return res
      }

      res[`${prefixCls}-${size}-${breakpoint}`] = breakpoint

      return res
    }, {})

    return cls(
      prefixCls,
      extraClass,
      {
        [`${prefixCls}-${span}`]: !isUndefined(span),
        [`${prefixCls}-offset-${offset}`]: offset,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-pull-${pull}`]: pull,
        [`${prefixCls}-push-${push}`]: push,
      },
      className,
    )
  }, [className, offset, order, prefixCls, props, pull, push, span])
}
