import { RowContext } from '@comps/_shared/contexts'
import { usePrefixCls } from '@comps/_shared/hooks'
import { withDefaults, withDisplayName } from '@comps/_shared/utils'
import { omit } from '@internal/utils'
import { type CSSProperties, type ForwardedRef, forwardRef } from 'react'

import useFormatClass from './hooks/use_format_class'
import useRowGutter from './hooks/use_row_gutter'
import { type RowProps } from './props'

const excluded = ['children', 'gutter', 'align', 'justify', 'wrap'] as const

const defaultProps: Partial<RowProps> = {
  gutter: 0,
  wrap: true,
}

function Row(_props: RowProps, ref: ForwardedRef<HTMLDivElement>) {
  const props = withDefaults(_props, defaultProps)

  const { children, gutter, style } = props

  const prefixCls = usePrefixCls('row')

  const classes = useFormatClass(prefixCls, props)

  const [hGutter, vGutter] = useRowGutter(gutter!)

  const [h, v] = [hGutter / -2, vGutter / -2]

  const gap: CSSProperties = {}

  if (h) gap.marginLeft = h

  if (h) gap.marginRight = h

  if (v) gap.rowGap = vGutter

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} className={classes} ref={ref} style={{ ...gap, ...style }}>
      <RowContext.Provider value={hGutter}>{children}</RowContext.Provider>
    </div>
  )
}

export default forwardRef(withDisplayName(Row))
