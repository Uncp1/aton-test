import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

export const localStorageMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(api.getState()));
  return result;
};
