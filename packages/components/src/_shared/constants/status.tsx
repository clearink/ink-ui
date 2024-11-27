import CheckCircleFilled from '@ink-ui/icons/lib/icons/CheckCircleFilled'
import CloseCircleFilled from '@ink-ui/icons/lib/icons/CloseCircleFilled'
import ExclamationCircleFilled from '@ink-ui/icons/lib/icons/ExclamationCircleFilled'
import InfoCircleFilled from '@ink-ui/icons/lib/icons/InfoCircleFilled'

import type { StatusType } from '../types'

export const presetStatus: StatusType[] = ['error', 'info', 'success', 'warning']

export const presetStatusIcons: Record<StatusType, JSX.Element> = {
  success: <CheckCircleFilled />,
  info: <InfoCircleFilled />,
  error: <CloseCircleFilled />,
  warning: <ExclamationCircleFilled />,
}

export function getPresetStatusIcon(type?: StatusType) {
  return type ? presetStatusIcons[type] || null : null
}
