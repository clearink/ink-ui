import { Button, Space } from '@ink-ui/core'

function App() {
  return (
    <Space wrap>
      <Button theme="danger" variant="filled">
        Primary
      </Button>
      <Button theme="danger">Default</Button>
      <Button theme="danger" variant="dashed">
        Dashed
      </Button>
      <Button theme="danger" variant="text">
        Text
      </Button>
    </Space>
  )
}

export default App
