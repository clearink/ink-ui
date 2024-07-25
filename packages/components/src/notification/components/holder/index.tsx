import type { ForwardedRef } from 'react'

import { attachDisplayName } from '@comps/_shared/utils'
import ConfigProvider from '@comps/config-provider'
import useNotification from '@comps/notification/hooks/use-notification'
import globalInstance from '@comps/notification/utils/global-instance'
import { forwardRef, useImperativeHandle, useState } from 'react'

import type { NotificationHolderRef } from './props'

function _NotificationHolder(_props: unknown, _ref: ForwardedRef<NotificationHolderRef>) {
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

attachDisplayName(_NotificationHolder)

const NotificationHolder = forwardRef(_NotificationHolder)

export default NotificationHolder
