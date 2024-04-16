import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import LoginPage from './pages/login/Login.page';
import Header from './components/header/header';
import RegisterPage from './pages/register/Register.page';
import NotFoundPage from './pages/not-found/NotFound.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export function Router() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}
