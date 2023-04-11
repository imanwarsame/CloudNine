import { createSlice } from '@reduxjs/toolkit';

const initialMode = () => {
	try {
		const localStorageValue = window.localStorage.getItem('colour_theme');
		return localStorageValue ? JSON.parse(localStorageValue) : 'dark'; //default dark theme
	} catch (error) {
		return 'dark';
	}
};

const themeSlice = createSlice({
	name: 'colour_theme',
	initialState: initialMode,
	reducers: {
		toggleTheme(type) {
			if (type === 'dark') {
				return 'light';
			}
			return 'dark';
		}
	}
});

export const toggleColourTheme = () => (dispatch) => {
	const currentTheme = JSON.parse(localStorage.getItem('colour_theme'));

	if (currentTheme === 'dark') {
		window.localStorage.setItem('colour_theme', JSON.stringify('light'));
	} else {
		window.localStorage.setItem('colour_theme', JSON.stringify('dark'));
	}

	dispatch(toggleTheme());
};

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;