import type { NotificationConfig } from '@comps/notification/props'
import type { VoidFn } from '@internal/types'

export interface NotificationListProps {
  notice: NotificationConfig
  onFinish: VoidFn
}
