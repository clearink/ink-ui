import { Button, notification } from '@comps'
import '@comps/style/components.scss'
import { createContext, useMemo } from 'react'

const AContext = createContext({ name: 'test' })

const App: React.FC = () => {
  const contextValue = useMemo(() => ({ name: 'Ant Design' }), [])

  return (
    <div>
      <AContext.Provider value={contextValue}>
        <div style={{ margin: 100 }}>
          <Button onClick={() => {
            notification.success({
              message: 'adad',
              description: '12123123',
            })
          }}
          >
            change
          </Button>
        </div>
      </AContext.Provider>
    </div>
  )
}

export default App
