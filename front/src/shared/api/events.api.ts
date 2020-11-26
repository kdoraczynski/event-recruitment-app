import httpClient from '../httpClient'
import { prop } from 'ramda'
import { EventModel } from './eventModel';

const endpoints = {
	main: '/events'
}

export const getDefault = (): EventModel => ({
	firstName: '1',
	lastName: '1',
	email: '1@1.pl',
	date: '',
})

export const getAll = async (): Promise<EventModel[]> =>
	httpClient.get(endpoints.main)
		.then(prop('data'))

export const create = async (event: EventModel): Promise<EventModel> =>
	httpClient.post(endpoints.main, event)
		.then(prop('data'))
