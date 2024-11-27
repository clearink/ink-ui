import{S as e,M as t}from"./index-CEPd8RRj.js";import{C as o}from"./index-SEEsNxV8.js";import{A as s}from"./iuv_690c812772fd4590cc7c453c55719301_salt_31-CM8IWeUJ.js";import{j as n}from"./index-Dljg3swt.js";import"./index-BKo4-nQ-.js";import"./keyboard-DDjTZLpe.js";import"./index-BD-TESYE.js";import"./pick-BK4giCUn.js";function d(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

`,"en-US":`基础用法

\`\`\`tsx
import { Button, Modal } from '@ink-ui/core'
import { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => { setIsOpen(true) }
  const close = () => { setIsOpen(false) }

  return (
    <>
      <Button onClick={open}>open</Button>
      <Modal isOpen={isOpen} onOk={close} onCancel={close}>
        <div>12331141341</div>
      </Modal>
    </>
  )
}
\`\`\`
`},disabled:!1,element:n.jsx(s,{}),rawText:`\`\`\`tsx
import { Button, Modal } from '@ink-ui/core'
import { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => { setIsOpen(true) }
  const close = () => { setIsOpen(false) }

  return (
    <>
      <Button onClick={open}>open</Button>
      <Modal isOpen={isOpen} onOk={close} onCancel={close}>
        <div>12331141341</div>
      </Modal>
    </>
  )
}
\`\`\`
`,title:"基础用法"}]})})]})}export{d as default};
