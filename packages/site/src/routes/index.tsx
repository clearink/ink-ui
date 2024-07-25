// routes
import { createBrowserRouter } from 'react-router-dom'

import AboutRoute from './about'
import NotFoundRoute from './not-found'
import OtherRoute from './other'
import RootRoute from './root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootRoute />,
    errorElement: <NotFoundRoute />,
    children: [
      {
        path: '/about',
        element: <AboutRoute />,
      },
      {
        path: '/other',
        element: <OtherRoute />,
      },
    ],
  },

])

export default router
