import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const isAuthenticated = () => {
  // Implement your authentication logic here.
  // For example, check if the user is logged in or has a valid token.
  // Return true if authenticated, false otherwise.
  return true // Replace with your actual authentication logic
}

const PrivateRoute = (component: React.FC) => {
  if (isAuthenticated()) {
    return <Route Component={component} />
  } else {
    return <Navigate to="/login" />
  }
}

export default PrivateRoute
