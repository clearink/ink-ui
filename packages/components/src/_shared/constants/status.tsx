import CheckCircleFilled from '@ink-ui/icons/esm/icons/CheckCircleFilled.mjs'
import CloseCircleFilled from '@ink-ui/icons/esm/icons/CloseCircleFilled.mjs'
import ExclamationCircleFilled from '@ink-ui/icons/esm/icons/ExclamationCircleFilled.mjs'
import InfoCircleFilled from '@ink-ui/icons/esm/icons/InfoCircleFilled.mjs'

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
