import React from 'react';
import type { ButtonProps } from 'react-bootstrap';
import { Button, Spinner } from 'react-bootstrap';

export type ProgressButtonProps = ButtonProps & {
	isLoading: boolean
}

const ProgressButton = ({
							isLoading,
							children,
							...buttonProps
						}: ProgressButtonProps) => (
	<Button {...buttonProps}>
		{
			isLoading
				? <Spinner animation='border'/>
				: children
		}
	</Button>
);


export default ProgressButton;
