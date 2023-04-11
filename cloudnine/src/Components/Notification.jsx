import React from 'react';
import { Alert, Snackbar, Slide } from '@mui/material';
import { useSelector } from 'react-redux';

const Notification = () => {
	const notification = useSelector(state => state.notification);

	function transition (props) {
		return <Slide {...props} direction='right'/>;
	}

	return (
		<Snackbar open={notification.content !== ''} TransitionComponent={transition} autoHideDuration={3000}>
			<Alert sx={{ borderColor: 'secondary', border: 0.5 }} severity={notification.type}>
				{notification.content}
			</Alert>
		</Snackbar>
	);
};

export default Notification;