import type { NotificationMethods } from '@comps/notification/props'
import type { VoidFn } from '@internal/types'

export interface NotificationHolderRef extends Pick<NotificationMethods, 'close' | 'open'> {
  sync: VoidFn
}
