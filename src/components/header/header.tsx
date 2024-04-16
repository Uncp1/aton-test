import { FC, useState } from 'react';
import { ActionIcon, Modal, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconLogout, IconSun } from '@tabler/icons-react';
import styles from './header.module.css';

const Header: FC = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [logoutModal, setLogoutModal] = useState(false);
  const theme = useMantineTheme();

  const toggleTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  const headerBackgroundColor =
    colorScheme === 'dark' ? theme.colors.blue[9] : theme.colors.blue[1];

  const logOut = () => {
    // TODO: log out
  };

  return (
    <header style={{ backgroundColor: headerBackgroundColor }} className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__title}>MockCompany</h1>

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
