import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColourTheme } from '../Reducers/ThemeReducer';
import { MoonIcon } from '../Assets/MoonIcon';
import { SunIcon } from '../Assets/SunIcon';

export default function ThemeToggle() {
	const mode = useSelector(state => state.colour_theme);
	const dispatch = useDispatch();

	const fabStyle = {
		right: 20,
		bottom: 20,
		position: 'fixed'
	};

	return(
		<IconButton disableRipple style={fabStyle} sx={{ '&:hover': { backgroundColor: 'transparent' } }} onClick={() => dispatch(toggleColourTheme())}>
			{mode === 'light' ? <MoonIcon/> : <SunIcon/>}
		</IconButton>
	);
}