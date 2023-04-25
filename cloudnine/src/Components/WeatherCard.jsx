import React from 'react';
import { Button, Grid, Paper, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNotification } from '../Reducers/NotificationReducer';
import WeatherIcon from './WeatherIcon';

export default function WeatherCard({ data, city }) {
	const dispatch = useDispatch();

	function convertDate(dt) {
		const h = dt.getUTCHours();
		const m = dt.getUTCMinutes();

		return ('0' + h).slice(-2) + ':' + ('0' + m).slice(-2) ;
	}

	const checkIfDay = () => {
		let dayTime = false;

		const localCurrent = new Date((new Date().valueOf()/1000 + data.timezone) * 1000).toISOString();
		const localSunrise = new Date((data.sys.sunrise + data.timezone) * 1000).toISOString();
		const localSunset = new Date((data.sys.sunset + data.timezone) * 1000).toISOString();

		if (localCurrent < localSunset && localCurrent > localSunrise) {
			dayTime = true;
		} else {
			dayTime = false;
		}

		return dayTime;
	};

	return (
		<Grid container spacing={2} sx={{ width: '75%', mb: 5, paddingRight: 2, paddingBottom: 2 }}>
			<Grid item xs={12}>
				<Paper sx={{ p: 2 }}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<WeatherIcon weatherID={data.weather[0].id} dayTime={checkIfDay()}/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Typography>{Math.round(data.main.temp)}°C</Typography>
							{(city === '') ? (<Typography>{data.name}</Typography>): (<Typography>{city}</Typography>)}
							<Button variant='outlined' color='secondary' onClick={() => dispatch(setNotification('success', 'This worked', 4))}>Hello</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12} md={3}>
				<Paper sx={{ p: 2, height: '100%' }}>
					<Typography>Sunrise: {convertDate(new Date((data.sys.sunrise + data.timezone) * 1000))}</Typography>
					<Typography>Sunset: {convertDate(new Date((data.sys.sunset + data.timezone) * 1000))}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={3}>
				<Paper sx={{ p: 2, height: '100%' }}>
					<Typography>Description: {data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={3}>
				<Paper sx={{ p: 2, height: '100%' }}>
					<Typography>Humidity: {data.main.humidity}%</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={3}>
				<Paper sx={{ p: 2, height: '100%' }}>
					<Typography>Wind speed: {Math.round(data.wind.speed * 2.23694)}mph</Typography>
					<Typography>Direction: {data.wind.deg}°</Typography>
				</Paper>
			</Grid>
		</Grid>
	);
}