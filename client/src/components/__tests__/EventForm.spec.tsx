import * as React from 'react';
import renderer from 'react-test-renderer';
import EventForm, { getEventFormInitialValues } from '../EventForm';

describe('EventForm', () => {
	it('getEventFormInitialValues() should return new event object', () => {
		const initialEventFormValues = getEventFormInitialValues();

		expect(initialEventFormValues).toMatchObject({
			firstName: '',
			lastName: '',
			email: '',
			date: ''
		});
	});

	it('Renders correctly', () => {
		const eventForm = renderer.create(<EventForm onSubmit={jest.fn()}/>)
			.toJSON();

		expect(eventForm).toMatchSnapshot();
	});
});
