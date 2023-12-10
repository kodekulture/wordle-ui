import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AuthenticationPage from '../pages/Authentication'
import { Home } from '@material-ui/icons'
import isAuthenticated from './PrivateRoute'
import ErrorHandler from '../pages/ErrorHandler'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthenticationPage/>
  },
  {
    path: '/',
    element: <Home/>,
    loader: async () => {
      if (!isAuthenticated()) {
        throw new Response('unauthenticated', { status: 400 })
      }

      return ({ status: true })
    },
    errorElement: <ErrorHandler/>
  }
])

export default router
