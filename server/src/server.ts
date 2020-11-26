import app from './app'
const { APP_PORT } = require('./config/env')

app.listen(APP_PORT)
