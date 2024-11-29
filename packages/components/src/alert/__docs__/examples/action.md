## zh-CN

通过 `action` 可以自定义右上角操作项。

## en-US

通过 `action` 可以自定义右上角操作项。

```tsx
import { Alert, Button, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert
          key={type}
          message={`${type} Text`}
          type={type}
          showIcon
          closable
          action={<Button size="small" variant="filled">action</Button>}
        />
      ))}
    </Space>
  )
}

export default App
```