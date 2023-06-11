import { createTheme } from '@mui/material/styles';
import LightBackground from './Assets/light-wallpaper.jpg';
import DarkBackground from './Assets/dark-wallpaper.jpg';

const lightTheme = createTheme({
	mode: 'light',
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#F38181',
		},
		background: {
			paper: '#F9F7F7'
		}
	},
	typography: {
		fontFamily: [
			'Poppins',
			'sans-serif',
		].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${LightBackground})`,
					height: '100vh',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					backgroundAttachment: 'fixed'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					backdropFilter: 'blur(10px)',
					background: 'linear-gradient(to bottom right, rgba(255,255,255,0.25), rgba(255,255,255,0))',
					boxShadow: '5px 5px 5px rgba(30,30,30,0.5)'
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
			paper: '#1B262C'
		},
	},
	typography: {
		fontFamily: [
			'Poppins',
			'sans-serif',
		].join(','),
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundImage: `url(${DarkBackground})`,
					height: '100vh',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center center',
					backgroundSize: 'cover',
					backgroundAttachment: 'fixed'
				},
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					backdropFilter: 'blur(10px)',
					background: 'linear-gradient(to bottom right, rgba(255,255,255,0.25), rgba(255,255,255,0))',
					boxShadow: '5px 5px 5px rgba(30,30,30,0.5)'
				},
			}
		}
	}
});

export { darkTheme, lightTheme };