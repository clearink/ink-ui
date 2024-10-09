import type { VoidFn } from '@internal/types'

import type { NotificationMethods } from '../../_shared/props'

export interface NotificationHolderRef extends Pick<NotificationMethods, 'close' | 'open'> {
  sync: VoidFn
}
