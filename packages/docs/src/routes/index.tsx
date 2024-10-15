// routes
import Article from '@/modules/articles'
import Components from '@/modules/components'
import ErrorRoute from '@/modules/error'
import Home from '@/modules/home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/components',
        element: <Components />,
        children: [
          // {
          //   path: '/button',
          // },
          // {
          //   path: '/tooltip',
          // },
        ],
      },
      {
        path: '/article',
        element: <Article />,
      },
    ],
  },

])

export default router
