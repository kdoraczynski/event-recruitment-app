import { action, makeAutoObservable, observable } from 'mobx';


class EventsStore {
	@observable createdEventsCount: number = 0;

	constructor() {
		makeAutoObservable(this);
	}

	@action incrementCreatedEventsCount = () => {
		this.createdEventsCount++;
	};
}

export default EventsStore;
