import type { StyledProps } from '@comps/_shared/types'

import { cls } from '@comps/_shared/utils'
import { isNullish } from '@internal/utils'

import type { AlertProps } from '../props'

export default function useFormatClass(
  prefixCls: string,
  props: AlertProps,
  context?: StyledProps,
) {
  const { banner, type, description, className, classNames = {} } = props

  return {
    root: cls(prefixCls, {
      [`${prefixCls}--as-banner`]: banner,
      [`${prefixCls}--${type}`]: type,
      [`${prefixCls}--has-description`]: !isNullish(description),
    }, context?.className, className, classNames.root),
    icon: cls(`${prefixCls}__icon`, classNames.icon),
    content: cls(`${prefixCls}__content`, classNames.content),
    message: cls(`${prefixCls}__message`, classNames.message),
    description: cls(`${prefixCls}__description`, classNames.description),
    action: cls(`${prefixCls}__action`, classNames.action),
    closeBtn: cls(`${prefixCls}__close-btn`, classNames.closeBtn),
  }
}
