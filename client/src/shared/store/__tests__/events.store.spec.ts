import EventsStore from '../events.store';

describe('EventsStore', () => {
	it('Should increment createdEventsCount', () => {
		const eventsStore = new EventsStore();

		expect(eventsStore.createdEventsCount).toBe(0);
		eventsStore.incrementCreatedEventsCount();
		expect(eventsStore.createdEventsCount).toBe(1);
	});
});
