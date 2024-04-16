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
      <form className={styles.form} onSubmit={fetchLogin}>
        <h2 className={styles.title}>Вход</h2>

        <TextInput
          radius="xl"
          size="lg"
          placeholder="Username"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.currentTarget.value)}
          className={styles.input}
        />
        <PasswordInput
          radius="xl"
          size="lg"
          placeholder="Password"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.currentTarget.value)}
          className={styles.input}
        />
        <Button className={styles.button} variant="light" radius="xl">
          Войти
        </Button>
      </form>

      <div>
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
