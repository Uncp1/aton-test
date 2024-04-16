import { FC, useState, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './login.module.css';
import { loginUser } from '@/utils/api';

const LoginPage: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await loginUser(loginValue, passwordValue);
    } catch (error) {
      setErrorMessage('Неверный логин или пароль');
    }
  };

  return (
    <main className={styles.layout}>
      <form className={styles.form} onSubmit={fetchLogin}>
        <h2 className={styles.title}>Вход</h2>

        <TextInput
          radius="xl"
          size="lg"
          placeholder="Логин"
          value={loginValue}
          onChange={(e) => setLoginValue(e.currentTarget.value)}
          className={styles.input}
        />
        <PasswordInput
          radius="xl"
          size="lg"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.currentTarget.value)}
          className={styles.input}
        />
        <Button type="submit" className={styles.button} variant="light" radius="xl">
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

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </main>
  );
};

export default LoginPage;
