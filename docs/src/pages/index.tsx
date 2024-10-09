import useRenderRoutes from '@hooks/use-render-routes'
import routes from '@routes'
import { HashRouter, Routes } from 'react-router-dom'

export default function App() {
  const elements = useRenderRoutes(routes)

  return (
    <HashRouter>
      <Routes>
        {elements}
      </Routes>
    </HashRouter>
  )
}
