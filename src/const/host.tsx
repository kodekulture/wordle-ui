const Host = process.env.SERVER_HOST === '' ? process.env.SERVER_HOST : 'http://localhost:9000'

export { Host }
