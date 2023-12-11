import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AuthenticationPage from '../pages/Authentication'
import ErrorHandler from '../pages/ErrorHandler'
import Home from '../pages/Home'
import type { LoaderFunction } from 'react-router-dom'
import isAuthenticated from '../../concern/Authentication'

const authLoader: LoaderFunction<string> = async () => {
  if (!isAuthenticated()) {
    throw new Response('UnAuthenticated User', { status: 401 })
  }

  return ({ status: 200 })
}

const router = createBrowserRouter([
  {
    path: '/login',
    element: <AuthenticationPage />
  },
  {
    path: '/',
    loader: authLoader,
    errorElement: <ErrorHandler/>,
    children: [
      {
        path: 'home',
        element: <Home/>
      }
    ]
  }
])

export default router
