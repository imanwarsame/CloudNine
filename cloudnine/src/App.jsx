import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function formatDate(d) {
	const day = days[d.getDay()];
	const date = d.getDate();
	const month = months[d.getMonth()];
	const year = d.getFullYear();
	return `${month} ${date}, ${year} | ${day}`;
}

export default function App() {
	const [lat, setLat] = useState();
	const [long, setLong] = useState();
	const [data, setData] = useState([]);

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
		<div>
			<Typography variant='h4'>{formatDate(new Date())}</Typography>
			{(typeof data.main !== 'undefined') ? (
				<Box>
					<Typography>{Math.round(data.main.temp)}°C</Typography>
					<Typography>{data.name}</Typography>
				</Box>
			): (
				<div></div>
			)}
		</div>
	);
}

// function App() {
// 	const [weather, setWeather] = useState(null);
// 	useEffect(() => {
// 		getLocalWeather().then(setWeather, console.error);
// 	}, []);

// 	return (
// 		<div className="App">
// 			<Typography>{formatDate(new Date())}</Typography>
// 			{(typeof weather.main !== 'undefined') ? <Typography>{Math.round(weather.main.temp)}°C</Typography> : null}
// 			{/* <Typography>{lat}</Typography>
// 			<Typography>{long}</Typography> */}
// 			{/* <Typography>Temperature: {data.main.temp}°C</Typography> */}
// 		</div>
// 	);
// }

// export default App;
