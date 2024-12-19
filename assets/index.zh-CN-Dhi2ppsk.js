import{S as n,M as i}from"./index-2FA1xd5V.js";import{C as o}from"./index-Bn21XSno.js";import{A as e}from"./iuv_e592fb9d9162f77e26925d8a34f15f83_salt_33-BL80J8Jy.js";import{j as t}from"./index-PE5A07Fz.js";import"./index-DeZBo5iq.js";import"./status-Bdd4C3TS.js";import"./index-0VBZlgHI.js";import"./is-null-D6OXYL3N.js";import"./pick-BK4giCUn.js";import"./index-C0ZTHqoH.js";import"./reflow-DmuTWTKY.js";import"./index-H6R-W09_.js";import"./index-C3vLzh75.js";import"./flatten-children-eXIioSAe.js";function h(){return t.jsxs("div",{className:"source-container",children:[t.jsx(n,{title:"何时使用",children:t.jsx(i,{rawText:"随你"})}),t.jsx(n,{title:"代码演示",children:t.jsx(o,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法

\`\`\`tsx
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
      message: \`Notification \${placement}\`,
      description: <Context.Consumer>{({ name }) => \`Hello, \${name}!\`}</Context.Consumer>,
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
\`\`\`
`},disabled:!1,element:t.jsx(e,{}),rawText:`\`\`\`tsx
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
      message: \`Notification \${placement}\`,
      description: <Context.Consumer>{({ name }) => \`Hello, \${name}!\`}</Context.Consumer>,
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
\`\`\`
`,title:"基础用法"}]})}),t.jsx(n,{title:"TODO",children:t.jsx(i,{rawText:`topLeft,topRight 删除最后一个元素不会自动收起
bottomLeft,bottomRight 删除最后一个元素会自动收起
需要使他们的行为保持一致`})})]})}export{h as default};
