import { makeUniqueId, withDefaults } from '@comps/_shared/utils'
import React from 'react'

import type { NotificationConfig } from '../props'

import NotificationList from '../components/list'
import { buildHolder } from './holder'

export default function notificationImpl() {
  const getHolder = buildHolder()

  const uniqueId = makeUniqueId('notice-')

  const defaultConfig: Partial<NotificationConfig> = {
    placement: 'topRight',
  }

  return function notification(_config: NotificationConfig) {
    const config = withDefaults(_config, {
      ...defaultConfig,
      // key需要动态变化
      key: uniqueId(),
    })

    const { root, destroy } = getHolder(config)

    root.render(
      <React.StrictMode>
        <NotificationList notice={config} onFinish={destroy} />
      </React.StrictMode>,
    )
  }
}
