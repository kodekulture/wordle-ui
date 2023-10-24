import { Host } from '../const/host'
import { accessToken as storageAccessToken } from '../const/token'

interface LoginProps {
  username: string
  password: string
}

interface LoginResponse {
  success: boolean
  message: string
}

const useLogin = async ({ username, password }: LoginProps): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${Host}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const data = await response.json()

      const { token } = data
      if (token === null) {
        return { success: false, message: 'Failed to login' }
      }

      localStorage.setItem(storageAccessToken, token)

      return { success: true, message: 'Login successful' }
    } else {
      return { success: false, message: 'Failed to login' }
    }
  } catch (error: any) {
    return { success: false, message: error.message }
  }
}

export { useLogin }
