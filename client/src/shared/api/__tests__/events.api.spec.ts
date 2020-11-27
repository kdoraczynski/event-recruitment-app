import { create } from '../events.api';
import MockAdapter from 'axios-mock-adapter';
import { API_URL } from '../../../config/env';
import httpClient from '../../httpClient';



describe('events.api', () => {
	it('Should execute POST /api/events', async () => {
		const mock = new MockAdapter(httpClient)

		mock.onPost(`${API_URL}/events`)
			.reply(201, {
				_id: '1',
				firstName: 'Jan',
				lastName: 'Kowalski',
				email: 'test@test.pl',
				date: '2020-11-27T00:00:00.000Z',
				createdAt: '2020-11-27T00:00:00.000Z',
				updatedAt: '2020-11-27T00:00:00.000Z'
			})

		const res = await create({
			firstName: 'Jan',
			lastName: 'Kowalski',
			email: 'test@test.pl',
			date: '2020-11-27'
		})

		expect(res).toMatchObject({
			_id: '1',
			firstName: 'Jan',
			lastName: 'Kowalski',
			email: 'test@test.pl',
			date: '2020-11-27T00:00:00.000Z',
			createdAt: '2020-11-27T00:00:00.000Z',
			updatedAt: '2020-11-27T00:00:00.000Z'
		})
	})
})
