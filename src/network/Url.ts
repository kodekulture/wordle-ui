import axios from 'axios'

const URL = process.env.REACT_APP_SERVER_URL

export const server = axios.create({
  baseURL: URL,
  headers: { 'Content-Type': 'application/json' }
})
