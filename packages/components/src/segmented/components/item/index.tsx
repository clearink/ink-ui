import { usePrefixCls, useSemanticStyles } from '@comps/_shared/hooks'
import { attachDisplayName } from '@comps/_shared/utils'
import { type ForwardedRef, forwardRef } from 'react'

import type { SegmentedItemProps } from './props'

import useFormatClass from './hooks/use_format_class'

function _SegmentedItem(props: SegmentedItemProps, _ref: ForwardedRef<HTMLLabelElement>) {
  const { checked, disabled, label, onChange, title, value } = props

  const prefixCls = usePrefixCls('segmented-item')

  const classNames = useFormatClass(prefixCls, props)

  const styles = useSemanticStyles(props)

  return (
    <label ref={_ref} className={classNames.root} style={styles.root}>
      <input
        className={classNames.radio}
        checked={checked}
        disabled={disabled}
        type="radio"
        onChange={() => {
          !disabled && onChange(value)
        }}
      />
      <div className={classNames.label} style={styles.label} title={title}>
        {label}
      </div>
    </label>
  )
}

attachDisplayName(_SegmentedItem, 'Segmented.Item')

const SegmentedItem = forwardRef(_SegmentedItem)

export default SegmentedItem
