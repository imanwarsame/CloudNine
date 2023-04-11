import { configureStore } from '@reduxjs/toolkit';
import ThemeReducer from './Reducers/ThemeReducer';
import NotificationReducer from './Reducers/NotificationReducer';

const store = configureStore({
	reducer: {
		colour_theme: ThemeReducer,
		notification: NotificationReducer
	}
});

export default store;