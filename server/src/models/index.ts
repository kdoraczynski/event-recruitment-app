import { connect, ConnectionOptions } from 'mongoose'
import dbConfig from '../config/db'

const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 200
}

export default connect(dbConfig.MONGO_URL, options)
  .catch((error: Error) => {
    console.log('Database connection failed')
    throw error
  })
