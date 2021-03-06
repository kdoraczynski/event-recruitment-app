import type { RequestHandler } from 'express'
import { Router } from 'express'
import { StatusCodes } from 'http-status-codes/build/cjs'

import { EventModel } from '../models/event.model'
import { createEventValidator } from '../validations/events'

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
