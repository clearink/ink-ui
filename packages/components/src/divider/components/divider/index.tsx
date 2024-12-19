import type { CSSProperties } from 'react'

import { semanticNames } from '@comps/_shared/constants'
import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { betterDisplayName, withDefaults } from '@comps/_shared/utils'
import { isNullish, omit } from '@internal/utils'

import type { DividerProps } from './props'

import useFormatClass from './hooks/use-format-class'
import { defaultDividerProps } from './props'

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

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  const marginStyle: CSSProperties = {}

  if (align === 'left') marginStyle.marginLeft = margin
  else if (align === 'right') marginStyle.marginRight = margin

  return (
    <div {...omit(props, excluded)} className={classNames.root} style={styles.root}>
      {direction === 'horizontal' && !isNullish(children) && (
        <span
          className={classNames.text}
          style={{ ...styles.text, ...marginStyle }}
        >
          {children}
        </span>
      )}
    </div>
  )
}

betterDisplayName(Divider)

export default Divider
