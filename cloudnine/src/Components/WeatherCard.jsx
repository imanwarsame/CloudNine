import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper } from '@mui/material';


export default function WeatherCard({ data }) {
	console.log(data);

	return (
		<Box>
			<Paper>
				<Typography>{Math.round(data.main.temp)}°C</Typography>
				<Typography>{data.name}</Typography>
			</Paper>
		</Box>
	);
}