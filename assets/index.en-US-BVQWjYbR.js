import{S as e,M as t}from"./index-CCq3zGJd.js";import{C as o}from"./index-BnmwbkTk.js";import{A as s}from"./iuv_690c812772fd4590cc7c453c55719301_salt_33-Dv7WhW2w.js";import{j as n}from"./index-x9Tw_J00.js";import"./index-Ddq968lt.js";import"./keyboard-DDjTZLpe.js";import"./index-Bh-IgqCB.js";import"./is-null-D6OXYL3N.js";import"./pick-BK4giCUn.js";function f(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

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
      <Modal isOpen={isOpen} onCancel={close}>
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
      <Modal isOpen={isOpen} onCancel={close}>
        <div>12331141341</div>
      </Modal>
    </>
  )
}
\`\`\`
`,title:"基础用法"}]})})]})}export{f as default};