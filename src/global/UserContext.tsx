import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react'
import { useUser } from '../handler/User'

interface AppContextType {
  username: string | null
  fetchData: () => Promise<void>
}

const UserContext = createContext<AppContextType | undefined>(undefined)

export const useUserContext = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider')
  }
  return context
}

interface UserContextProviderProps {
  children: ReactNode
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null)

  const fetchData = async () => {
    const response = await useUser()
    if (response.success) {
      setUsername(response.username)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return (
    <UserContext.Provider value={{ username, fetchData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
