## zh-CN

基础用法

## en-US

基础用法

```tsx
import { Button, Divider, Space, notification } from '@ink-ui/core'
import RadiusBottomleftOutlined from '@ink-ui/icons/lib/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@ink-ui/icons/lib/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@ink-ui/icons/lib/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@ink-ui/icons/lib/icons/RadiusUprightOutlined'
import React, { useMemo } from 'react'

const Context = React.createContext({ name: 'Default' })

export default function App() {
  const [api, contextHolder] = notification.useNotification()

  const openNotification = (placement) => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
      duration: 1e10
    })
  }

  const contextValue = useMemo(() => ({ name: 'Ink UI' }), [])

  return (
    <Context.Provider value={contextValue}>
      {contextHolder}
      <Space>
        <Button
          variant="filled"
          onClick={() => openNotification('topLeft')}
        >
          <RadiusUpleftOutlined />
          topLeft
        </Button>
        <Button
          variant="filled"
          onClick={() => openNotification('topRight')}
        >
          <RadiusUprightOutlined />
          topRight
        </Button>
      </Space>
      <Divider />
      <Space>
        <Button
          variant="filled"
          onClick={() => openNotification('bottomLeft')}
        >
          <RadiusBottomleftOutlined />
          bottomLeft
        </Button>
        <Button
          variant="filled"
          onClick={() => openNotification('bottomRight')}
        >
          <RadiusBottomrightOutlined />
          bottomRight
        </Button>
      </Space>
    </Context.Provider>
  )
}
```
