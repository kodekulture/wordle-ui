import { Host } from '../const/host'
import { accessToken as storageAccessToken } from '../const/token'

interface CreateGameResponse {
  success: boolean
  message: string
  id: string
}

const CreateGameHandler = async (): Promise<CreateGameResponse> => {
  try {
    const response = await fetch(`${Host}/room`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(storageAccessToken)
      }
    })

    if (response.ok) {
      const data = await response.json()
      const { id } = data
      return { success: true, message: '', id }
    } else {
      return { success: false, message: 'Failed to create game', id: '' }
    }
  } catch (error: any) {
    return { success: false, message: error.message, id: '' }
  }
}

export { CreateGameHandler }
