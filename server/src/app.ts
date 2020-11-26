import express from 'express'
import { errors } from 'celebrate'
import bodyParser from 'body-parser'
import cors from 'cors'

import eventRouter from './routes/events.route'

import index from './models'
console.log(index)

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/api/events', eventRouter)
app.use(errors())

export default app
