## zh-CN

基础用法

## en-US

基础用法

```tsx
import { Col, Row } from '@ink-ui/core'

export default function App() {
  return (
    <>
      <Row>
        <Col span={24}>col</Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-12</Col>
        <Col span={8}>col-12</Col>
        <Col span={8}>col-12</Col>
      </Row>
      <Row>
        <Col span={6}>col-12</Col>
        <Col span={6}>col-12</Col>
        <Col span={6}>col-12</Col>
        <Col span={6}>col-12</Col>
      </Row>
    </>
  )
}
```

```scss
.grid-example-basic {
  .ink-row {
    margin-bottom: 16px;
  }
}
```
