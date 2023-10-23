import { Host } from '../const/host'
import { accessToken as storageAccessToken } from '../const/token'

interface JoinGameProps {
  id: string
}

interface JoinGameResponse {
  success: boolean
  message: string
  token: string
}

const JoinGameHandler = async ({ id }: JoinGameProps): Promise<JoinGameResponse> => {
  try {
    const response = await fetch(`${Host}/join/room/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(storageAccessToken)
      }
    })

    if (response.ok) {
      const data = await response.json()
      const { token } = data

      return { success: true, message: '', token }
    } else {
      return { success: false, message: 'Failed to join game', token: '' }
    }
  } catch (error: any) {
    return { success: false, message: error.message, token: '' }
  }
}

export { JoinGameHandler }
