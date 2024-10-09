## zh-CN

可关闭

## en-US

xxx en

```tsx
import { Alert, Space } from '@ink-ui/core'

function App() {
  return (
    <Space direction="vertical">
      {['info', 'success', 'warning', 'error'].map(type => (
        <Alert key={type} message={`${type} Text`} type={type} showIcon closable />
      ))}
    </Space>
  )
}

export default App
```
