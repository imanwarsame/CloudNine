import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './Reducers/ThemeReducer';

const store = configureStore({
	reducer: {
		colour_theme: ThemeReducer
	}
});

export default store;