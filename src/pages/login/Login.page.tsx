import { FC } from 'react';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './login.module.css';

const LoginPage: FC = () => {
  const fetchLogin = async () => {
    // TODO: fetch login
  };
  return (
    <main className={styles.layout}>
      <form onSubmit={fetchLogin}>
        <TextInput radius="xl" placeholder="Username" />
        <PasswordInput radius="xl" placeholder="Password" />
        <Button variant="light" radius="xl">
          login
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
