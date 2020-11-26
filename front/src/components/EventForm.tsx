import React from 'react';
import Card from 'react-bootstrap/cjs/Card';
import { Form, InputGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import eventSchema from './event.schema';
import { getDefault } from '../shared/api/events.api';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

type Props = {
	onSubmit: (...args: any[]) => void
}

const initialValues = getDefault()

const EventForm = ({ onSubmit }: Props) => {
	return (
		<Card
			className="mt-3"
			body
		>
			<Formik
				initialValues={initialValues}
				validationSchema={eventSchema}
				onSubmit={(values, { setSubmitting }) => {
					setSubmitting(true)
					onSubmit(values)
					setSubmitting(false)
				}}
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
										isInvalid={!!errors.firstName}
									/>
									<Form.Control.Feedback type={'invalid'}>
										{ errors.firstName }
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
										isInvalid={!!errors.lastName}
									/>
									<Form.Control.Feedback type={'invalid'}>
										{ errors.lastName }
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
										isInvalid={!!errors.email}
									/>
									<Form.Control.Feedback type={'invalid'}>
										{ errors.email }
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
										isInvalid={!!errors.date}
									/>
									<Form.Control.Feedback type={'invalid'}>
										{ errors.date }
									</Form.Control.Feedback>
								</Col>
							</Form.Group>
							<Button
								type="submit"
							>
								Sign up
							</Button>
						</Form>
					)
				}
			</Formik>
		</Card>
	);
};

export default EventForm;
