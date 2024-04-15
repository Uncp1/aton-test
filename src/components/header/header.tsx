import { FC, useState } from 'react';
import { ActionIcon, Modal, useMantineColorScheme } from '@mantine/core';
import { IconLogout, IconSun } from '@tabler/icons-react';
import styles from './header.module.css';

const Header: FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [logoutModal, setLogoutModal] = useState(false);
  const toggleTheme = () => {
    if (colorScheme === 'dark') {
      setColorScheme('light');
    } else {
      setColorScheme('dark');
    }
  };
  const logOut = () => {
    // TODO: log out
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>Личный кабинет</h1>

        <div className={styles.header__actions}>
          <ActionIcon onClick={toggleTheme}>
            <IconSun />
          </ActionIcon>
          <ActionIcon onClick={logOut}>
            <IconLogout />
          </ActionIcon>
        </div>
      </div>
      <Modal opened={logoutModal} onClose={logOut} title="Authentication">
        {/* Modal content */}
      </Modal>
    </header>
  );
};

export default Header;
