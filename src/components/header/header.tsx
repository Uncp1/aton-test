import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Modal, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconLogout, IconSun } from '@tabler/icons-react';
import styles from './header.module.css';
import { logoutUser } from '@/utils/api';
import { useAppDispatch } from '@/utils/hooks/useApp';
import { logout } from '@/services/slices/user-slice';

const Header: FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [logoutModal, setLogoutModal] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  const headerBackgroundColor =
    colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[1];

  const handleLogout = () => {
    dispatch(logout());
    logoutUser();
    navigate('/login', { replace: true });
  };

  return (
    <header style={{ backgroundColor: headerBackgroundColor }} className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>MockCompany</h1>

        <div className={styles.header__actions}>
          <ActionIcon onClick={toggleTheme}>
            <IconSun />
          </ActionIcon>
          <ActionIcon onClick={handleLogout}>
            <IconLogout />
          </ActionIcon>
        </div>
      </div>
      <Modal opened={logoutModal} onClose={handleLogout} title="Authentication">
        {/* Modal content */}
      </Modal>
    </header>
  );
};

export default Header;
