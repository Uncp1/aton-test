import { useAppSelector } from './useApp';

export function useAuth() {
  const { token } = useAppSelector((store) => store.user);
  console.log('useAuth', token);
  const isAuthenticated = !!token && token !== '';

  return isAuthenticated;
}
