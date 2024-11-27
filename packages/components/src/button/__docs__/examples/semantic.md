```tsx
import { Button } from '@ink-ui/core'

export default function App(props) {
  const { classNames } = props
  return (
    <div>
      <Button classNames={{
        root: 'root',
        text: 'text',
        icon: 'icon'
      }}
      >
        Button
      </Button>
    </div>
  )
}
```
