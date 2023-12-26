import React from 'react'
import { Navigate, useRouteError } from 'react-router-dom'
import NotFound from '../static/NotFound'
import type { ErrorResponse } from 'react-router-dom'
import { useErrorStore } from '../../hooks/stores'

const ErrorHandler: React.FC = () => {
  const { status } = useRouteError() as ErrorResponse

  if (status === 401) {
    const { setErrors } = useErrorStore()

    setErrors({
      id: 1,
      message: 'You are Not authenticated!'
    })

    return <Navigate to="/login"/>
  } else {
    return <NotFound/>
  }
}

export default ErrorHandler
