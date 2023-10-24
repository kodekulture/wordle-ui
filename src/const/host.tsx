const Host = process.env.SERVER_URL === '' ? process.env.SERVER_URL : 'http://localhost:9000'
const WSS_HOST = process.env.WSS_SERVER_URL === '' ? process.env.WSS_SERVER_URL : 'ws://localhost:9000'

export { Host, WSS_HOST }
