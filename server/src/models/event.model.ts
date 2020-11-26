import { Schema, model } from 'mongoose'

export const EventModel = model('EventModel', new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  }
}))
