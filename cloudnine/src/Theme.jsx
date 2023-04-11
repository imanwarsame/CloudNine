import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
	mode: 'light',
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#F38181',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: 'linear-gradient(to right, #fceabb, #f8b500)'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					backgroundColor: '#F9F7F7'
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
		background: {
			default: '#222831',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: 'linear-gradient(to right, #000428, #004e92)'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					backgroundColor: '#1B262C'
				},
			}
		}
	}
});

export { darkTheme, lightTheme };