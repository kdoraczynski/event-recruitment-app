require('dotenv').config()

const DEFAULT_APP_PORT: number = 8080
const NODE_ENV = process.env.NODE_ENV || 'dev'

const config: Record<string, any> = {
  dev: {
    APP_PORT: process.env.APP_PORT || DEFAULT_APP_PORT
  },
  prod: {
    APP_PORT: process.env.APP_PORT
  }
}

module.exports = config[NODE_ENV]
