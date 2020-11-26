import React from 'react';
import './App.css';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import Col from 'react-bootstrap/cjs/Col';
import EventForm from './components/EventForm';
import { EventModel } from './shared/api/eventModel';
import { create } from './shared/api/events.api';
import { toast } from 'react-toastify';

function App() {
	const handleSubmit = async (data: EventModel) => {
		return await create(data)
			.then((createdEvent: EventModel) => {
				toast.success('Saved!')
				return createdEvent
			})
			.catch((error) => {
				toast.error('An error occurred')
				throw error
			})
	};

	return (
		<div className="App">
			<Container>
				<Row>
					<Col
						sm="12"
						md={{ span: 6, offset: 3 }}
					>
						<EventForm
							onSubmit={handleSubmit}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
