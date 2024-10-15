import { Badge, Button, Space } from '@comps'
import '@comps/style/components.scss'
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@icons'
import { useState } from 'react'

import './style.scss'

const App: React.FC = () => {
  const [count, setCount] = useState(5)
  const increase = () => {
    setCount(count + 1)
  }
  const random = () => {
    const newCount = Math.floor(Math.random() * 100)
    setCount(newCount)
  }
  const decline = () => {
    let newCount = count - 1
    if (newCount < 0)
      newCount = 0

    setCount(newCount)
  }
  return (
    <div className="container" style={{ margin: 100 }}>
      <Button onClick={decline}><MinusOutlined /></Button>
      <Button onClick={increase}>
        <PlusOutlined />
      </Button>
      <Button onClick={random}>
        <QuestionOutlined />
      </Button>

      <Space size="large">
        <Badge count={count}>
          <Button>12312231</Button>
        </Badge>
      </Space>
    </div>
  )
}

export default App
