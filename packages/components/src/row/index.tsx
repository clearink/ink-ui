import { semanticNames } from '@comps/_shared/constants'
import { RowContext } from '@comps/_shared/contexts'
import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { attachDisplayName, withDefaults } from '@comps/_shared/utils'
import { omit } from '@internal/utils'
import { type ForwardedRef, forwardRef, useMemo } from 'react'

import useFormatClass from './hooks/use-format-class'
import useRowGutter from './hooks/use-row-gutter'
import { type RowProps, defaultRowProps } from './props'

const excluded = [
  'children',
  'gutter',
  'align',
  'justify',
  'wrap',
  ...semanticNames,
] as const

function _Row(_props: RowProps, ref: ForwardedRef<HTMLDivElement>) {
  const props = withDefaults(_props, defaultRowProps)

  const { children, gutter } = props

  const prefixCls = usePrefixCls('row')

  const classes = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  const [hGutter, vGutter] = useRowGutter(gutter!)

  const rootStyle = useMemo(() => {
    const result = { ...styles.root }

    if (hGutter) rootStyle.marginLeft = hGutter / -2
    if (hGutter) rootStyle.marginRight = hGutter / -2
    if (vGutter) rootStyle.rowGap = vGutter

    return result
  }, [styles.root, hGutter, vGutter])

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} ref={ref} className={classes} style={rootStyle}>
      <RowContext.Provider value={hGutter}>{children}</RowContext.Provider>
    </div>
  )
}

attachDisplayName(_Row)

const Row = forwardRef(_Row)

export default Row
