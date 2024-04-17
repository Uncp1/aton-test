import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  username: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  token: string | null;
}

const initialState: UserState = {
  username: '',
  status: 'idle',
  error: null,
  token: null,
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
      state.token = action.payload.access_token;
      state.username = action.payload.user.username;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout: (state) => {
      state.username = '';
      state.token = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { loginPending, loginSuccess, loginFailed, logout } = userSlice.actions;

export default userSlice.reducer;
