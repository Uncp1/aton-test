import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userSlice from './slices/user-slice';
import { localStorageMiddleware } from './middlewares/local-storage';

const preloadedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : undefined;

const rootReducer = combineReducers({ user: userSlice });
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
