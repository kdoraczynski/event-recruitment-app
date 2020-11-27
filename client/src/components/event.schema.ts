import { date, object, string } from 'yup';
import { DEFAULT_REQUIRED_ERROR_MESSAGE } from '../shared/constants';

const eventSchema = object({
	firstName: string()
		.required(DEFAULT_REQUIRED_ERROR_MESSAGE),
	lastName: string()
		.required(DEFAULT_REQUIRED_ERROR_MESSAGE),
	email: string()
		.email('Invalid email address')
		.required(DEFAULT_REQUIRED_ERROR_MESSAGE),
	date: date()
		.required(DEFAULT_REQUIRED_ERROR_MESSAGE)
});

export default eventSchema;
