import{S as e,M as t}from"./index-CwDTuL7I.js";import{C as o}from"./index-CvzOteuv.js";import{A as s}from"./iuv_0bab3c60986b1230fbc023be8c28b1c4_salt_33-Dvq5-Rku.js";import{j as n}from"./index-DXrpuSMZ.js";import"./index-UjWuoH-M.js";import"./keyboard-DDjTZLpe.js";import"./index-XugLxV4P.js";import"./is-null-D6OXYL3N.js";import"./pick-BK4giCUn.js";function f(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(o,{items:[{desc:{"zh-CN":`基础用法

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
