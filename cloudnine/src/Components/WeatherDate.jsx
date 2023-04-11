import React from 'react';
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

export default function WeatherDate() {
	return (
		<Box>
			<Typography variant='h4'>{formatDate(new Date())}</Typography>
		</Box>
	);
}