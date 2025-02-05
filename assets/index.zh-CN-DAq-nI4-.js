import{S as t,M as o}from"./index-5fHpaQ-q.js";import{C as i}from"./index-Cz_YnBqI.js";import{A as e}from"./iuv_8cc20384e14015138d77a69a3b6c669c_salt_34-BACtImId.js";import{j as n}from"./index-DqVpFauo.js";import"./index-BhSWUbPD.js";import"./status-BG9OI-JC.js";import"./index-CT6YLoo0.js";import"./is-null-D6OXYL3N.js";import"./pick-BK4giCUn.js";import"./index-DQGBQihA.js";import"./index-C4lQg3BI.js";import"./index-ue1_ClpI.js";import"./flatten-children-BQCxWC9U.js";function R(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(o,{rawText:"随你"})}),n.jsx(t,{title:"代码演示",children:n.jsx(i,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法

\`\`\`tsx
import { Button, Divider, Space, notification } from '@ink-ui/core'
import RadiusBottomleftOutlined from '@ink-ui/icons/lib/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@ink-ui/icons/lib/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@ink-ui/icons/lib/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@ink-ui/icons/lib/icons/RadiusUprightOutlined'
import React, { useMemo, useState } from 'react'

const Context = React.createContext({ name: 'Default' })

export default function App() {
  const [stackEnable, setStackEnable] = useState(true)

  const [api, contextHolder] = notification.useNotification({
    stack: stackEnable
  })

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
      <div style={{ marginBottom: 24 }}>
        <Button onClick={() => { setStackEnable(p => !p) }}>
          stackEnable-
          {\`\${stackEnable}\`}
        </Button>
      </div>
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
          onClick={() => openNotification('top')}
        >
          top
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
          onClick={() => openNotification('bottom')}
        >
          bottom
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
import RadiusBottomleftOutlined from '@ink-ui/icons/lib/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@ink-ui/icons/lib/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@ink-ui/icons/lib/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@ink-ui/icons/lib/icons/RadiusUprightOutlined'
import React, { useMemo, useState } from 'react'

const Context = React.createContext({ name: 'Default' })

export default function App() {
  const [stackEnable, setStackEnable] = useState(true)

  const [api, contextHolder] = notification.useNotification({
    stack: stackEnable
  })

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
      <div style={{ marginBottom: 24 }}>
        <Button onClick={() => { setStackEnable(p => !p) }}>
          stackEnable-
          {\`\${stackEnable}\`}
        </Button>
      </div>
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
          onClick={() => openNotification('top')}
        >
          top
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
          onClick={() => openNotification('bottom')}
        >
          bottom
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
`,title:"基础用法"}]})}),n.jsx(t,{title:"TODO",children:n.jsx(o,{rawText:`topLeft,topRight 删除最后一个元素不会自动收起
bottomLeft,bottomRight 删除最后一个元素会自动收起
需要使他们的行为保持一致`})})]})}export{R as default};
