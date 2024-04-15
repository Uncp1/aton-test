import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import LoginPage from './pages/login/Login.page';
import Header from './components/header/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
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
