import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import WeatherDate from './Components/WeatherDate';
import WeatherCard from './Components/WeatherCard';
import { darkTheme, lightTheme } from './Theme';
import ThemeToggle from './Components/ThemeToggle';
import { useSelector } from 'react-redux';
import Notification from './Components/Notification';

export default function App() {
	const [lat, setLat] = useState();
	const [long, setLong] = useState();
	const [data, setData] = useState(null);
	const mode = useSelector(state => state.colour_theme);
	const notification = useSelector(state => state.notification);
	const theme = mode === 'light' ? lightTheme : darkTheme;

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
		});
	}, []);


	useEffect(() => {
		const fetchData = async () => {
			const connectionString = `${import.meta.env.VITE_WEATHER_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_WEATHER_API_KEY}`;

			await axios.get(connectionString)
				.then(result => {
					setData(result.data);
					console.log(result.data);
				});
		};

		if (lat && long) {
			fetchData();
		}

	}, [lat,long]);

	return (
		<ThemeProvider theme={theme}>
			{/* Globally resets CSS to create a baseline to build on */}
			<CssBaseline/>
			<ThemeToggle/>
			{notification !== '' && <Notification/>}
			<Box>
				<WeatherDate/>
				{(data !== null) ? (<WeatherCard data={data}/>): (<div></div>)}
			</Box>
		</ThemeProvider>
	);
}