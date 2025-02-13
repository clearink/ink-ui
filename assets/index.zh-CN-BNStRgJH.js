import{S as e,M as t}from"./index-CAJOBy89.js";import{C as a}from"./index-VNy3MUkM.js";import{A as s,a as o}from"./muv_6f5f30965dc2a14a38ae948ac90bbc06_salt_23-2SRhCJ8X.js";import{j as n}from"./index-DJ1F7XH_.js";import"./index-CydBdLVU.js";import"./keyboard-DDjTZLpe.js";import"./pick-BK4giCUn.js";function x(){return n.jsxs("div",{className:"source-container",children:[n.jsx(e,{title:"何时使用",children:n.jsx(t,{rawText:"随你"})}),n.jsx(e,{title:"代码演示",children:n.jsx(a,{items:[{desc:{},disabled:!1,element:n.jsx(s,{}),rawText:`\`\`\`tsx
import { Collapse } from '@mink-ui/core'

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`
const items = [
  {
    name: '1',
    title: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    name: '2',
    title: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    name: '3',
    title: 'This is panel header 3',
    children: <p>{text}</p>,
  },
]

export default function App() {
  const onChange = (expandName, expandedNames) => {
    console.log(expandName, expandedNames)
  }

  return (
    <Collapse
      items={items}
      defaultExpandedNames={['1']}
      onChange={onChange}
    />
  )
}
\`\`\`
`,title:"基础用法"},{desc:{},disabled:!1,element:n.jsx(o,{}),rawText:`\`\`\`tsx
import { Collapse } from '@mink-ui/core'

const text = \`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
\`
const items = [
  {
    name: '1',
    title: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    name: '2',
    title: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    name: '3',
    title: 'This is panel header 3',
    children: <p>{text}</p>,
  },
]

export default function App() {
  const onChange = (expandName, expandedNames) => {
    console.log(expandName, expandedNames)
  }

  return (
    <Collapse
      accordion
      items={items}
      defaultExpandedNames={['1']}
      onChange={onChange}
    />
  )
}
\`\`\`
`,title:"手风琴模式"}]})})]})}export{x as default};
