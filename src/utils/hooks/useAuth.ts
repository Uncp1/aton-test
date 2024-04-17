import { useAppSelector } from './useApp';

export function useAuth() {
  const { token } = useAppSelector((store) => store.user);

  const isAuthenticated = !!token && token !== '';

  return isAuthenticated;
}
