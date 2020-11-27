import React, { useCallback, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { observer } from 'mobx-react-lite';

import EventForm from './components/EventForm';
import { EventModel } from './shared/api/eventModel';
import { create } from './shared/api/events.api';
import { EventsStoreContext } from './shared/store';
import type EventsStore from './shared/store/events.store';

import './App.css';

function App() {
	const eventsStore = useContext<EventsStore>(EventsStoreContext);

	const handleEventCreate = useCallback(async (data: EventModel): Promise<Required<EventModel>> => {
		try {
			const createdEvent = await create(data);
			eventsStore.incrementCreatedEventsCount();
			toast.success('Signed up');
			return createdEvent;
		} catch (error) {
			toast.error('An error occurred');
			throw error;
		}
	}, [ eventsStore ]);

	return (
		<div className="App">
			<Container>
				<Row>
					<Col
						sm="12"
						md={{ span: 6, offset: 3 }}
					>
						<EventForm
							onSubmit={handleEventCreate}
						/>
					</Col>
					<Col
						sm="12"
						md={{ span: 6, offset: 3 }}
					>
						Created events count: {eventsStore.createdEventsCount}
					</Col>
					<ToastContainer/>
				</Row>
			</Container>
		</div>
	);
}

export default observer(App);
