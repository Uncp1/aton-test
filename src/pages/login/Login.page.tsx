import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './login.module.css';
import { loginUser } from '@/utils/api';

const LoginPage: FC = () => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const fetchLogin = async () => {
    const res = await loginUser(usernameValue, passwordValue);
    return res;
  };

  return (
    <main className={styles.layout}>
      <form onSubmit={fetchLogin}>
        <TextInput
          radius="xl"
          placeholder="Username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.currentTarget.value)}
        />
        <PasswordInput
          radius="xl"
          placeholder="Password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.currentTarget.value)}
        />
        <Button variant="light" radius="xl">
          Войти
        </Button>
      </form>

      <div className={styles.register}>
        <p className={styles.item}>
          Вы — новый пользователь?
          <NavLink to="/register" className={styles.link}>
            Зарегистрироваться
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
