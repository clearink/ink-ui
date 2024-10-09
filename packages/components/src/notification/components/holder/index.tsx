import { betterDisplayName } from '@comps/_shared/utils'
import ConfigProvider from '@comps/config-provider'
import { forwardRef, useImperativeHandle, useState } from 'react'

import type { NotificationHolderRef } from './props'

import globalInstance from '../../_shared/utils/global-instance'
import useNotification from '../../hooks/use-notification'

function NotificationHolder(_props: unknown, _ref: React.ForwardedRef<NotificationHolderRef>) {
  // TODO
  // const _globalConfig = {}

  // TODO
  // 在使用 useNotification 之前,需要组合所有的配置信息,然后传给 hook
  // 具体有哪些方面的配置信息呢?
  // 1 instance.globalConfig
  // 2 ConfigProvider.notificationConfig
  // 3 AppConfig.notificationConfig
  const [config, setConfig] = useState(() => ({ ...globalInstance.globalConfig }))

  const [api, holder] = useNotification(config)

  useImperativeHandle(_ref, () => ({
    get open() { return api.open },
    get close() { return api.close },
    sync: () => { setConfig({ ...globalInstance.globalConfig }) },
  }), [api])

  return (
    <ConfigProvider>
      {holder}
    </ConfigProvider>
  )
}

betterDisplayName(NotificationHolder, 'Notification.Holder')

export default forwardRef(NotificationHolder)
