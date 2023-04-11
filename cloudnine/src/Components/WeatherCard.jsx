import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNotification } from '../Reducers/NotificationReducer';


export default function WeatherCard({ data }) {
	const dispatch = useDispatch();

	return (
		<Box>
			<Paper>
				<Typography>{Math.round(data.main.temp)}°C</Typography>
				<Typography>{data.name}</Typography>
				<Button color='secondary' onClick={() => dispatch(setNotification('success', 'This worked', 4))}>Hello</Button>
			</Paper>
		</Box>
	);
}