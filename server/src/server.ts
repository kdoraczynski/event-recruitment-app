import app from './app'
import appConfig from './config/app'
import connectToMongo from './models'

connectToMongo().then(() => {
  app.listen(appConfig.APP_PORT, () => {
    console.log(`App is listening at http://localhost:${appConfig.APP_PORT}`)
  })
})
