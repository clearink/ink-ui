import { cls } from '@comps/_shared/utils'

import type { ValidateStatus } from '../../../_shared/props'
import type { FormItemInputProps } from '../props'

export default function useFormatClass(
  prefixCls: string,
  status: ValidateStatus,
  wrapperCol: FormItemInputProps['wrapperCol'] = {},
) {
  return cls(prefixCls, status && `${prefixCls}--has-${status}`, wrapperCol.className)
}
