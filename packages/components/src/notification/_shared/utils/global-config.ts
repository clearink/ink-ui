import type { NotificationConfig } from '../props'

import { defaultNotificationConfig } from '../props'

class GlobalNotificationConfig {
  private config: NotificationConfig = { ...defaultNotificationConfig }

  get = (): NotificationConfig => {
    return { ...this.config }
  }

  set = (config: NotificationConfig) => {
    this.config = config
  }
}

export default new GlobalNotificationConfig()
