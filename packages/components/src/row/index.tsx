import { RowContext } from '@comps/_shared/contexts'
import { usePrefixCls } from '@comps/_shared/hooks'
import { attachDisplayName, withDefaults } from '@comps/_shared/utils'
import { omit } from '@internal/utils'
import { type CSSProperties, type ForwardedRef, forwardRef } from 'react'

import type { RowProps } from './props'

import useFormatClass from './hooks/use_format_class'
import useRowGutter from './hooks/use_row_gutter'

const excluded = ['children', 'gutter', 'align', 'justify', 'wrap'] as const

const defaultProps: Partial<RowProps> = {
  gutter: 0,
  wrap: true,
}

function _Row(_props: RowProps, ref: ForwardedRef<HTMLDivElement>) {
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
    <div {...attrs} ref={ref} className={classes} style={{ ...gap, ...style }}>
      <RowContext.Provider value={hGutter}>{children}</RowContext.Provider>
    </div>
  )
}

attachDisplayName(_Row)

const Row = forwardRef(_Row)

export default Row
