import type { NotificationConfig } from '@comps/notification/props'
import type { VoidFn } from '@internal/types'

export interface NotificationNoticeProps extends Omit<NotificationConfig, 'attrs' | 'key' | 'placement'> {
  onExited: VoidFn
}
