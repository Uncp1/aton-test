import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
      console.log(action.payload, state.user);
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { loginPending, loginSuccess, loginFailed, logout } = userSlice.actions;

export default userSlice.reducer;
