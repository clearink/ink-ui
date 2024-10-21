const content = `---
title: Alert 警告提示
desc: 警告提示，展现需要关注的信息。

---

<Demo title="基本" code="basic" />

## API

### Alert

<Props file="props" of="AlertProps" />

### Alert.ErrorBoundary

<Props file="components/error-boundary/props" of="ErrorBoundaryProps" />`

=>
const content = `
import xxx from 'yyy'
import basicNode from './demos/basic'
import basicCode from './demos/basic?raw'

const propsAlertProps = []
const componentsErrorBoundaryPropsErrorBoundaryProps = []

function App(){
return <>

<header>Alert</header>
<CodeDemo title="基本" code={basicCode} node={basicNode}>
{parsedNode}
</Demo>
// other html
<ApiTable api={propsAlertProps}  />
// other html
<ApiTable api={componentsErrorBoundaryPropsErrorBoundaryProps}
</>
}

<Demo title="基本" code="basic" />

## API

### Alert

<Props file="props" of="AlertProps" />

### Alert.ErrorBoundary

<Props file="components/error-boundary/props" of="ErrorBoundaryProps" />`
