import { useSemanticStyles } from '@icons/_shared/hooks'
import { cls } from '@icons/_shared/utils'
import { type IconComp, type IconDesc } from '@icons/types'
import { type ForwardedRef, forwardRef, useMemo } from 'react'

import { type IconWrapProps } from './props'

export default function withIcon(Icon: IconComp, desc: IconDesc) {
  const { name, theme } = desc

  const viewBox = theme === 'twotone' ? '64 64 896 896' : '0 0 1024 1024'

  function IconWrap(props: IconWrapProps, ref: ForwardedRef<HTMLSpanElement>) {
    const { className, classNames = {}, style, styles: _styles } = props

    const styles = useSemanticStyles(style, _styles)

    const spanClassName = useMemo(
      () => cls('kpi-icon', name && `icon-${name}`, className, classNames.root)
      , [className, classNames.root],
    )

    return (
      <span
        {...props}
        aria-label={name}
        className={spanClassName}
        ref={ref}
        role="img"
        style={styles.root}
      >
        <Icon
          aria-hidden="true"
          data-icon={name}
          focusable="false"
          height="1em"
          viewBox={viewBox}
          width="1em"
        />
      </span>
    )
  }

  return forwardRef(IconWrap)
}
