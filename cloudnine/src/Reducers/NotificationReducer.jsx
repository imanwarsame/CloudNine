import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		addNotification(state, action) {
			return action.payload;
		}
	},
});


export const { addNotification } = notificationSlice.actions;

export const setNotification = (type, content, time) => {
	let notificationObj = new Object();
	notificationObj.type = type;
	notificationObj.content = content;

	return async dispatch => {
		dispatch(addNotification(notificationObj));
		setTimeout(() => {
			dispatch(addNotification(''));
		}, time*1000);
	};
};

export default notificationSlice.reducer;