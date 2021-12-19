import { Collapse } from '@comps'
import '@comps/style/components.scss'

import './style.scss'

const App: React.FC = () => {
  return (
    <div>
      <div style={{ margin: 100 }}>
        <Collapse
          items={[
            {
              name: '123',
              title: 'adad',
              children: <div>12312</div>,
            },
            {
              name: '1231',
              title: 'adad',
              children: <div>12312</div>,
            },
          ]}
        />
      </div>
    </div>
  )
}

export default App
