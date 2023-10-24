import { WSS_HOST } from '../const/host'

const useLiveConnect = (token: string): WebSocket => {
  const ws = new WebSocket(`${WSS_HOST}/live?token=${token}`)
  ws.onopen = () => {
    console.log('Connected')
  }
  ws.onclose = () => {
    console.log('Disconnected')
  }
  return ws
}

export { useLiveConnect }
