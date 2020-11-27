import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { Form, InputGroup, Row, Col, Card } from 'react-bootstrap';
import eventSchema from './event.schema';
import { EventModel } from '../shared/api/eventModel';
import ProgressButton from './ProgressButton';

type EventFormProps = {
	onSubmit: (eventData: EventModel) => Promise<EventModel>
}

export const getEventFormInitialValues = (): EventModel => ({
	firstName: '',
	lastName: '',
	email: '',
	date: '',
});

const EventForm = ({ onSubmit }: EventFormProps) => {
	const handleSubmit = useCallback(async (formData, { setSubmitting, resetForm }) => {
		setSubmitting(true);
		await onSubmit(formData);
		resetForm();
		setSubmitting(false);
	}, [ onSubmit ]);

	return (
		<Card
			className="mt-3"
			body
		>
			<Formik
				initialValues={getEventFormInitialValues()}
				validationSchema={eventSchema}
				onSubmit={handleSubmit}
			>
				{
					({
						 handleSubmit,
						 isSubmitting,
						 handleChange,
						 handleBlur,
						 touched,
						 errors,
						 values
					 }) => (
						<Form
							noValidate
							onSubmit={handleSubmit}
						>
							<Form.Group
								as={Row}
								controlId="firstName"
								key="firstName"
								className=''
							>
								<Form.Label
									column
									sm="3"
								>
									First name
								</Form.Label>
								<Col sm="9">
									<Form.Control
										name="firstName"
										value={values.firstName}
										onChange={handleChange}
										onBlur={handleBlur}
										isInvalid={touched.firstName && !!errors.firstName}
									/>
									<Form.Control.Feedback
										type='invalid'
										className='text-left'
									>
										{errors.firstName}
									</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="lastName"
								key="lastName"
							>
								<Form.Label
									column
									sm="3"
								>
									Last name
								</Form.Label>
								<Col sm="9">
									<Form.Control
										name="lastName"
										value={values.lastName}
										onChange={handleChange}
										onBlur={handleBlur}
										isInvalid={touched.lastName && !!errors.lastName}
									/>
									<Form.Control.Feedback
										type='invalid'
										className='text-left'
									>
										{errors.lastName}
									</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="email"
								key="email"
							>
								<Form.Label
									column
									sm="3"
								>
									Email address
								</Form.Label>
								<Col sm="9">
									<InputGroup>
										<InputGroup.Prepend>
											<InputGroup.Text>@</InputGroup.Text>
										</InputGroup.Prepend>
										<Form.Control
											name="email"
											value={values.email}
											onChange={handleChange}
											onBlur={handleBlur}
											isInvalid={touched.email && !!errors.email}
										/>
										<Form.Control.Feedback
											type='invalid'
											className='text-left'
										>
											{errors.email}
										</Form.Control.Feedback>
									</InputGroup>
								</Col>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="date"
								key="date"
							>
								<Form.Label
									column
									sm="3"
								>
									Event date
								</Form.Label>
								<Col sm="9">
									<Form.Control
										type='date'
										name="date"
										value={values.date}
										onChange={handleChange}
										onBlur={handleBlur}
										isInvalid={touched.date && !!errors.date}
									/>
									<Form.Control.Feedback
										type='invalid'
										className='text-left'
									>
										{errors.date}
									</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<ProgressButton
								type='submit'
								isLoading={isSubmitting}
							>
								Sign up
							</ProgressButton>
						</Form>
					)
				}
			</Formik>
		</Card>
	);
};

export default EventForm;
