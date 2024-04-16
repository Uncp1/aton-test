import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user-slice';

const rootReducer = combineReducers({ user: userSlice });
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
