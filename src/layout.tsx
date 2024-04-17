import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/header';

const Layout: FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
