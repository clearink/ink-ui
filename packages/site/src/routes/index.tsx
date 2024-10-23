// routes
import BlankLayout from '@/components/blank-layout'
import NotFoundRoute from '@/modules/404'
import ArticleRoute from '@/modules/articles'
import ErrorRoute from '@/modules/error'
import HomeRoute from '@/modules/home'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: '/components',
        element: <BlankLayout />,
        children: [
          {
            index: true,
            element: <Navigate replace to="button" />,
          },
          {
            path: 'button',
            element: <BlankLayout />,
          },
        ],
      },
      {
        path: '/blog',
        element: <ArticleRoute />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundRoute />,
  },

])

export default router
