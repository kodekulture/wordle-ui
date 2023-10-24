import React, { useEffect } from 'react'
import { useUserContext } from './UserContext'

const withAuthentication = (WrappedComponent: React.FC, isProtected: boolean) => {
  const WrapperComponent: React.FC = () => {
    const { username, fetchData } = useUserContext()

    useEffect(() => {
      // Handle fetchData promise separately
      fetchData()
        .then(() => {
          const isAuthenticated = username !== null && username !== undefined && username !== ''

          if (isAuthenticated && !isProtected) {
            window.location.href = '/home'
          } else if (!isAuthenticated && isProtected) {
            window.location.href = '/login'
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }, [])

    return <WrappedComponent />
  }

  return WrapperComponent
}

export default withAuthentication
