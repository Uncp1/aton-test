import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import LoginPage from './pages/login/Login.page';
import RegisterPage from './pages/register/Register.page';
import NotFoundPage from './pages/not-found/NotFound.page';
import Layout from './layout';
import ProtectedRoute from './components/protected-route';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRoute anonymous={false}>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/login',
        element: (
          <ProtectedRoute anonymous>
            <LoginPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/register',
        element: (
          <ProtectedRoute anonymous>
            <RegisterPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
