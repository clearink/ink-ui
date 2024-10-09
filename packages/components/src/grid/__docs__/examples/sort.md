## zh-CN

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

## en-US

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```tsx
import { Col, Row } from '@ink-ui/core'

export default function App() {
  return (
    <Row>
      <Col span={18} push={6}>
        col-18 col-push-6
      </Col>
      <Col span={6} pull={18}>
        col-6 col-pull-18
      </Col>
    </Row>
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
