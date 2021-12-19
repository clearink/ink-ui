import { cls } from '@comps/_shared/utils'

import { type AlertProps } from '../props'

export default function useFormatClass(prefixCls: string, props: AlertProps) {
  const { className, classNames = {} } = props

  return {
    root: cls(prefixCls, {}, className, classNames.root),
  }
}
