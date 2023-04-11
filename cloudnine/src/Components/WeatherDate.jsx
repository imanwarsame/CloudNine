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

const nth = function(d) {
	if (d > 3 && d < 21) return 'th';
	switch (d % 10) {
	case 1:  return 'st';
	case 2:  return 'nd';
	case 3:  return 'rd';
	default: return 'th';
	}
};

function formatDate(d) {
	const day = days[d.getDay()];
	const date = d.getDate();
	const month = months[d.getMonth()];
	const year = d.getFullYear();
	return `${day} the ${date}${nth(date)} of ${month}, ${year}`;
}

export default function WeatherDate() {
	return (
		<Box>
			<Typography variant='h4'>{formatDate(new Date())}</Typography>
		</Box>
	);
}