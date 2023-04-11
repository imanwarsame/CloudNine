import React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Grid, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNotification } from '../Reducers/NotificationReducer';


export default function WeatherCard({ data }) {
	const dispatch = useDispatch();

	return (
		<Grid container spacing={2} sx={{ mx: 'auto', width: '75%' }}>
			<Grid item xs={8}>
				<Paper sx={{ p: 2 }}>
					<Typography>{Math.round(data.main.temp)}°C</Typography>
					<Typography>{data.name}</Typography>
					<Button variant='outlined' color='secondary' onClick={() => dispatch(setNotification('success', 'This worked', 4))}>Hello</Button>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper sx={{ p: 2 }}>
					<Typography>Description: {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper sx={{ p: 2 }}>
					<Typography>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-GB')}</Typography>
					<Typography>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-GB')}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={8}>
				<Paper sx={{ p: 2 }}>
					<Typography>Humidity: {data.main.humidity}%</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}