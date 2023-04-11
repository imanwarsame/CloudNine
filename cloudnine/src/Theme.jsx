import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	mode: 'light',
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#FFD93D',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: 'linear-gradient(to right, #3494e6, #ec6ead)'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 20,
				},
			}
		}
	}
});

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#0B2447',
		},
		secondary: {
			main: '#A5D7E8',
		},
	},
});

export { darkTheme, lightTheme };