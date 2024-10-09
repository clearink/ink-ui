import router from '@/routes'
import '@comps/style/components.scss'
import { RouterProvider } from 'react-router-dom'

import './style.scss'

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />

  )
}

export default App
