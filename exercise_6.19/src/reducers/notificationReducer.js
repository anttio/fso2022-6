import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(message, duration) {
        return { payload: { message, duration } };
      },
    },
    clearNotification(state) {
      return (state = '');
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
