import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleColourTheme } from '../Reducers/ThemeReducer';
import { MoonIcon } from '../Assets/MoonIcon';
import { SunIcon } from '../Assets/SunIcon';

export default function ThemeToggle() {
	const mode = useSelector(state => state.colour_theme);
	const dispatch = useDispatch();

	return(
		<IconButton disableRipple sx={{ '&:hover': { backgroundColor: 'transparent' }, right: '1%',
			bottom: '1%', position: 'fixed' }} onClick={() => dispatch(toggleColourTheme())}>
			{mode === 'light' ? <MoonIcon/> : <SunIcon/>}
		</IconButton>
	);
}