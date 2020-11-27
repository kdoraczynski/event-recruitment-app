import app from './app'
import appConfig from './config/app'
import connectToMongo from './models'

connectToMongo().then(() => {
  app.listen(appConfig.APP_PORT, () => {
    console.log(`App is listening at port: ${appConfig.APP_PORT}`)
  })
})
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
