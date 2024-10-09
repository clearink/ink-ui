import { usePrefixCls } from '@comps/_shared/hooks'
import { BREAKPOINT_NAME } from '@comps/_shared/hooks/use-breakpoint/breakpoint'
import { betterDisplayName } from '@comps/_shared/utils'
import { RowContext } from '@comps/row/_shared/contexts'
import { omit } from '@internal/utils'
import { type ForwardedRef, forwardRef } from 'react'

import type { ColProps } from './props'

import useColFlex from './hooks/use-col-flex'
import useFormatClass from './hooks/use-format-class'

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
    <div {...attrs} ref={ref} className={classes} style={{ flex, ...gapStyle, ...style }}>
      {children}
    </div>
  )
}

betterDisplayName(Col)

export default forwardRef(Col)
