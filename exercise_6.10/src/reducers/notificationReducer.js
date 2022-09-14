import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      state.push({
        message: action.payload.message,
      });
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
