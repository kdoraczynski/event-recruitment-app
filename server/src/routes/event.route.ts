import { Router } from 'express'
import type { RequestHandler } from 'express'
import { EventModel } from '../models/event.model'
import { createEventValidator } from '../validations/events'
// import { StatusCodes } from 'http-status-codes/build/es'
const { StatusCodes } = require('http-status-codes')

const eventRouter = Router()

const getEvents: RequestHandler = async (req, res) => {
  const events = await EventModel.find()

  res.status(StatusCodes.OK)
    .send(events)
}

const createEvent: RequestHandler = async (req, res, next) => {
  const event = new EventModel(req.body)

  try {
    const createdEvent = await event.save()
    res.status(StatusCodes.CREATED)
      .send(createdEvent)
  } catch (error) {
    next(error)
  }
}

eventRouter.get('/', getEvents)
eventRouter.post('/', createEventValidator, createEvent)

export default eventRouter
