import { RowContext } from '@comps/_shared/contexts'
import { usePrefixCls } from '@comps/_shared/hooks'
import { BREAKPOINT_NAME } from '@comps/_shared/hooks/use-breakpoint/breakpoint'
import { withDisplayName } from '@comps/_shared/utils'
import { omit } from '@internal/utils'
import { type ForwardedRef, forwardRef } from 'react'

import useColFlex from './hooks/use_col_flex'
import useFormatClass from './hooks/use_format_class'
import { type ColProps } from './props'

const excluded = [
  'children',
  'style',
  'flex',
  'span',
  'offset',
  'order',
  'pull',
  'push',
  ...BREAKPOINT_NAME,
] as const

function Col(props: ColProps, ref: ForwardedRef<HTMLDivElement>) {
  const { children, style } = props

  const prefixCls = usePrefixCls('col')

  const classes = useFormatClass(prefixCls, props)

  const gutter = RowContext.useState() / 2

  const gapStyle = gutter ? { paddingLeft: gutter, paddingRight: gutter } : undefined

  const flex = useColFlex(props.flex)

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} className={classes} ref={ref} style={{ flex, ...gapStyle, ...style }}>
      {children}
    </div>
  )
}

export default forwardRef(withDisplayName(Col))
