import { connect, ConnectionOptions } from 'mongoose'
import dbConfig from '../config/db'

const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 200
}

const connectToMongo = () => connect(dbConfig.MONGO_URL, options)
  .then(() => {
    console.log('Successfully connected to mongo')
  })
  .catch((error: Error) => {
    console.error('Database connection failed')
    throw error
  })

export default connectToMongo
