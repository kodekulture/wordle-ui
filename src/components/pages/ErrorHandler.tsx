import React from 'react'
import { Navigate, useRouteError } from 'react-router-dom'
import type { ErrorResponse } from 'react-router-dom'

const ErrorHandler: React.FC = () => {
  const { data } = useRouteError() as ErrorResponse

  if (data === 'unauthenticated') {
    return <Navigate to='/login'/>
  }

  return (<></>)
}

export default ErrorHandler
