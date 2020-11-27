import httpClient from '../httpClient';
import { prop } from 'ramda';
import { EventModel } from './eventModel';

const endpoints = {
	main: '/events'
};

export const create = async (event: EventModel): Promise<Required<EventModel>> =>
	httpClient.post(endpoints.main, event)
		.then(prop('data'));
