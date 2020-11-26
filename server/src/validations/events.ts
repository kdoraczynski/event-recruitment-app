import { celebrate, Joi, Segments } from 'celebrate'

export const createEventValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    firstName: Joi.string().empty('').required(),
    lastName: Joi.string().empty('').required(),
    email: Joi.string().email().required(),
    date: Joi.date().required()
  })
})
