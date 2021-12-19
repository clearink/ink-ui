import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { withDisplayName } from '@comps/_shared/utils'
import { type ForwardedRef, forwardRef } from 'react'

import useFormatClass from './hooks/use_format_class'
import { type SegmentedItemProps } from './props'

function SegmentedItem(props: SegmentedItemProps, _ref: ForwardedRef<HTMLLabelElement>) {
  const { checked, disabled, label, onChange, style, styles: _styles, title, value } = props

  const prefixCls = usePrefixCls('segmented-item')

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(style, _styles)

  return (
    <label className={classNames.root} ref={_ref} style={styles.root}>
      <input
        checked={checked}
        className={classNames.radio}
        disabled={disabled}
        onChange={() => {
          !disabled && onChange(value)
        }}
        type="radio"
      />
      <div className={classNames.label} style={styles.label} title={title}>
        {label}
      </div>
    </label>
  )
}

export default forwardRef(withDisplayName(SegmentedItem))
