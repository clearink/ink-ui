import { semanticNames } from '@comps/_shared/constants'
import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { attachDisplayName, withDefaults } from '@comps/_shared/utils'
import { isNullish, omit } from '@internal/utils'
import { useMemo } from 'react'

import useFormatClass from './hooks/use-format-class'
import { type DividerProps, defaultDividerProps } from './props'

const excluded = [
  'children',
  'dashed',
  'align',
  'margin',
  'plain',
  'direction',
  ...semanticNames,
] as const

function Divider(_props: DividerProps) {
  const props = withDefaults(_props, defaultDividerProps)

  const { align, children, direction, margin } = props

  const prefixCls = usePrefixCls('divider')

  const classes = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  const innerStyle = useMemo(() => {
    const result = { ...styles.text }

    if (align === 'left') result.marginLeft = margin
    else if (align === 'right') result.marginRight = margin

    return result
  }, [align, margin, styles.text])

  const attrs = omit(props, excluded)

  return (
    <div {...attrs} className={classes} style={styles.root}>
      {direction === 'horizontal' && !isNullish(children) && (
        <span className={`${prefixCls}__inner-text`} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  )
}

attachDisplayName(Divider)
export default Divider
