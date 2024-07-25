import router from '@/routes'
import { Alert, Badge, Button, Collapse, Form, Segmented, notification } from '@comps'
import { CssTransition } from '@comps/_shared/components'
import '@comps/style/components.scss'
import kv from '@validator'
import { useEffect, useReducer, useRef, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import './style.scss'

function Input(props: any) {
  return <input {...props} style={{ height: 32 }} value={props.value || ''} />
}

const App: React.FC = () => {
  const [api, holder] = notification.useNotification({
    stack: !false,
  })
  return (
  // <RouterProvider router={router} />
    <div>
      {holder}
      <Button onClick={() => {
        api.success({
          message: 'asdasdasdad',
          description: <div>12123123123</div>,
          duration: 1e10,
        })
      }}
      >
        dadasdsa
      </Button>
      {/* <Segmented
          options={[
            'iOS',
            'Android',
            'Web',
            'iOS1',
            'Android1',
            'Web12',
            'iOS2',
            'Android2',
            'Web2',
          ]}
        /> */}

      {Array.from({ length: 0 }, (_, i) => (
        <div key={i} style={{ marginBottom: 24 }}>
          12312
          <input />
          <section>
            <input />
            <p>13222222222222</p>
          </section>
          <section>
            <input />
            <p>13222222222222</p>
          </section>
          <section>
            <input />
            <p>13222222222222</p>
          </section>
        </div>
      ))}

    </div>
  )
}

export default App
