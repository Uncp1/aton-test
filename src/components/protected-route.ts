import { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/utils/hooks/useAuth';

const ProtectedRoute: FC<PropsWithChildren<{ anonymous?: boolean }>> = ({
  children,
  anonymous,
}) => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !anonymous) {
      navigate('/login', { replace: true });
    }
    if (isAuthenticated && anonymous) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default ProtectedRoute;
