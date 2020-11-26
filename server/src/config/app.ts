import dotenv from 'dotenv'

dotenv.config()

const DEFAULT_APP_PORT: number = 8080
const NODE_ENV = process.env.NODE_ENV || 'dev'

const appConfig = {
  dev: {
    APP_PORT: process.env.APP_PORT || DEFAULT_APP_PORT
  },
  prod: {
    APP_PORT: process.env.APP_PORT
  }
}

export default appConfig[NODE_ENV]
