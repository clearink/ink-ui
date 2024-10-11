import { Button, Modal } from '@comps'
import '@comps/style/components.scss'
import { useState } from 'react'

const App: React.FC = () => {
  const [a, set] = useState(false)
  return (
    // <RouterProvider router={router} />
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={() => { set(true) }}>ads adsd </Button>
      <Modal open={a} title="adsadsasas" onOk={() => { set(false) }} onCancel={() => { set(false) }}>
        asdas ad asd
      </Modal>

    </div>
  )
}

export default App
