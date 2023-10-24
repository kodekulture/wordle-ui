import { Host } from '../const/host'
import { accessToken as storageAccessToken } from '../const/token'

interface MeResponse {
  success: boolean
  username: string
}

const useUser = async (): Promise<MeResponse> => {
  const response = await fetch(`${Host}/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem(storageAccessToken)
    }
  })

  if (response.ok) {
    const { username } = await response.json()
    return { success: true, username }
  }

  // Remove old token
  localStorage.removeItem(storageAccessToken)
  return { success: false, username: '' }
}

export { useUser }
