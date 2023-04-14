import React from 'react';
import { useEffect, useState } from 'react';
import { Button, Grid, Paper, SvgIcon, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNotification } from '../Reducers/NotificationReducer';
import { ReactComponent as DustWindIcon } from '../Assets/weather_icons/dust-wind.svg';
import { ReactComponent as DrizzleIcon } from '../Assets/weather_icons/drizzle.svg';

export default function WeatherCard({ data }) {
	const dispatch = useDispatch();
	const [icon, setIcon] = useState();

	useEffect(() => {
		const weatherID = data.weather[0].id;
		console.log(weatherID);

		if (weatherID === 500) {
			setIcon(DrizzleIcon);
		} else {
			setIcon(DustWindIcon);
		}
	}, []);

	return (
		<Grid container spacing={2} sx={{ mx: 'auto', width: '75%' }}>
			<Grid item xs={8}>
				<Paper sx={{ p: 2 }}>
					<Typography>{Math.round(data.main.temp)}°C</Typography>
					<Typography>{data.name}</Typography>
					<SvgIcon fontSize='large'>
						{icon}
					</SvgIcon>
					<Button variant='outlined' color='secondary' onClick={() => dispatch(setNotification('success', 'This worked', 4))}>Hello</Button>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper sx={{ p: 2 }}>
					<Typography>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString(navigator.language, { hour: '2-digit', minute:'2-digit' })}</Typography>
					<Typography>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString(navigator.language, { hour: '2-digit', minute:'2-digit' })}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper sx={{ p: 2 }}>
					<Typography>Description: {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={8}>
				<Paper sx={{ p: 2 }}>
					<Typography>Humidity: {data.main.humidity}%</Typography>
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper sx={{ p: 2 }}>
					<Typography>Wind speed: {Math.round(data.wind.speed * 2.23694)}mph</Typography>
					<Typography>Direction: {data.wind.deg}°</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}