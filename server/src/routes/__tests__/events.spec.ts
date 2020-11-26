import request from 'supertest'
import app from '../../app'
import { StatusCodes } from 'http-status-codes/build/cjs'
import { connection } from 'mongoose'

const exemplaryEventData = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  email: 'email@email.com',
  date: '2020-11-27T00:00:00.000Z'
}

describe('/events', () => {
  it('Should return an array', async () => {
    const res = await request(app)
      .get('/api/events')

    expect(res.status).toBe(StatusCodes.OK)
    expect(Array.isArray(res.body)).toBe(true)
  })

  it('Should create new event and then return it', async () => {
    const res = await request(app)
      .post('/api/events')
      .send(exemplaryEventData)

    expect(res.status).toBe(StatusCodes.CREATED)
    expect(res.body).toMatchObject({
      ...exemplaryEventData,
      _id: expect.any(String),
      createdAt: expect.any(String),
      updatedAt: expect.any(String)
    })
  })

  it('Should return validation error result', async () => {
    const res = await request(app)
      .post('/api/events')
      .send({})

    expect(res.status).toBe(StatusCodes.BAD_REQUEST)
    expect(res.body).toMatchObject({
      statusCode: StatusCodes.BAD_REQUEST,
      error: 'Bad Request',
      message: expect.any(String),
      validation: expect.any(Object)
    })
  })

  afterAll(() => {
    connection.close()
  })
})
