import { FC } from 'react';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './login.module.css';

const LoginPage: FC = () => {
  const hi = 'hi';
  return (
    <main className={styles.layout}>
      <TextInput radius="xl" placeholder="Username" />
      <PasswordInput radius="xl" placeholder="Password" />
      <Button variant="light" radius="xl">
        login
      </Button>
    </main>
  );
};

export default LoginPage;
