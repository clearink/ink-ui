import{S as t,M as i}from"./index-CEPd8RRj.js";import{C as o}from"./index-SEEsNxV8.js";import{A as e}from"./iuv_e592fb9d9162f77e26925d8a34f15f83_salt_32-CqSBquFk.js";import{j as n}from"./index-Dljg3swt.js";import"./index-BKo4-nQ-.js";import"./status-CC3SByFZ.js";import"./index-BD-TESYE.js";import"./pick-BK4giCUn.js";import"./index-ZCWwBcXN.js";import"./reflow-CuTvmlrV.js";import"./index-D3kRMd6D.js";import"./index-aqk4Q7PB.js";import"./flatten-children-CS_oHsL4.js";function C(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(i,{rawText:"随你"})}),n.jsx(t,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法

\`\`\`tsx
import { Button, Divider, Space, notification } from '@ink-ui/core'
import RadiusBottomleftOutlined from '@ink-ui/icons/esm/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@ink-ui/icons/esm/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@ink-ui/icons/esm/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@ink-ui/icons/esm/icons/RadiusUprightOutlined'
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
`},disabled:!1,element:n.jsx(e,{}),rawText:`\`\`\`tsx
import { Button, Divider, Space, notification } from '@ink-ui/core'
import RadiusBottomleftOutlined from '@ink-ui/icons/esm/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@ink-ui/icons/esm/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@ink-ui/icons/esm/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@ink-ui/icons/esm/icons/RadiusUprightOutlined'
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
`,title:"基础用法"}]})})]})}export{C as default};
