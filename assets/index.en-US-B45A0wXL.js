import{S as t,M as o}from"./index-FC-mqB-y.js";import{C as i}from"./index-1ANoqq-m.js";import{A as e}from"./muv_05dfde57dd2bb925823a0125e0c160dd_salt_34-CMUYPmNc.js";import{j as n}from"./index-CjykfIXO.js";import"./index-BnM1UKCo.js";import"./status-CeTYAyNH.js";import"./index-DkuNQCk6.js";import"./is-null-D6OXYL3N.js";import"./pick-BK4giCUn.js";import"./index-CI5urNrl.js";import"./index-BShZI8IK.js";import"./index-CXN6UeB0.js";import"./flatten-children-CNtXnJXv.js";function x(){return n.jsxs("div",{className:"source-container",children:[n.jsx(t,{title:"何时使用",children:n.jsx(o,{rawText:"随你"})}),n.jsx(t,{title:"代码演示",children:n.jsx(i,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法

\`\`\`tsx
import { Button, Divider, Space, notification } from '@mink-ui/core'
import RadiusBottomleftOutlined from '@mink-ui/icons/lib/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@mink-ui/icons/lib/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@mink-ui/icons/lib/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@mink-ui/icons/lib/icons/RadiusUprightOutlined'
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
import { Button, Divider, Space, notification } from '@mink-ui/core'
import RadiusBottomleftOutlined from '@mink-ui/icons/lib/icons/RadiusBottomleftOutlined'
import RadiusBottomrightOutlined from '@mink-ui/icons/lib/icons/RadiusBottomrightOutlined'
import RadiusUpleftOutlined from '@mink-ui/icons/lib/icons/RadiusUpleftOutlined'
import RadiusUprightOutlined from '@mink-ui/icons/lib/icons/RadiusUprightOutlined'
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
`,title:"基础用法"}]})})]})}export{x as default};
