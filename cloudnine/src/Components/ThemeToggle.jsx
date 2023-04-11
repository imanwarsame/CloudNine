import { Fab, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColourTheme } from '../Reducers/ThemeReducer';

export default function ThemeToggle() {
	const mode = useSelector(state => state.colour_theme);
	const dispatch = useDispatch();

	return(
		<Fab color='secondary' onClick={() => dispatch(toggleColourTheme())}>
			{mode === 'light' ? <Typography>Dark</Typography> : <Typography>Light</Typography>}
		</Fab>
	);
}