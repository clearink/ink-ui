## zh-CN

当 Tooltip 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

## en-US

当 Tooltip 贴边时，自动偏移并且调整箭头位置。当超出过多时，则一同滚出屏幕。

```tsx
import { Button, Tooltip } from '@ink-ui/core'
import { useEffect } from 'react'

export default function App() {
  useEffect(() => {
    document.documentElement.scrollTop = document.documentElement.clientHeight
    document.documentElement.scrollLeft = document.documentElement.clientWidth
  }, [])

  return (
    <div style={{
      width: '300vw',
      height: '300vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <Tooltip content="Thanks for using antd. Have a nice day !" isOpen>
        <Button variant="filled">Scroll The Window</Button>
      </Tooltip>
    </div>
  )
}
```
