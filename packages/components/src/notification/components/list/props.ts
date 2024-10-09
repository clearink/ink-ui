import type { NotificationPlacement } from '@comps/_shared/types'
import type { VoidFn } from '@internal/types'

import type { NotificationConfig } from '../../_shared/props'
import type { NotificationProps } from '../notice/props'

export interface NotificationListProps extends Pick<NotificationConfig, 'bottom' | 'maxCount' | 'stack' | 'top'> {
  notices: NotificationProps[]
  placement: NotificationPlacement
  onExited?: VoidFn
  onClose: (key: NotificationProps['key']) => void
  onFinished?: VoidFn
}

export interface StackState {
  delta: number
  scale: number
  height: number | undefined
}
