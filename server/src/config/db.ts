require('dotenv').config()

const dbConfig = {
  MONGO_URL: process.env.MONGO_URL
}

export default dbConfig
