import request from 'supertest'
import app from '../../app'

describe('GET /api/events', () => {
  it('should return array', () => {
    return request(app).get('/api/events')
      .expect(200)
  })
})
