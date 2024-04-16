import { FC, FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './register.module.css';
import { UserData, registerUser } from '@/utils/api';

const RegisterPage: FC = () => {
  const [loginValue, setLoginValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const fetchRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: UserData = {
      username: usernameValue,
      login: loginValue,
      password: passwordValue,
    };
    const res = await registerUser(userData);

    return res;
  };

  return (
    <main className={styles.layout}>
      <form className={styles.form} onSubmit={fetchRegister}>
        <h2 className={styles.title}>Регистрация</h2>

        <TextInput
          radius="xl"
          size="lg"
          placeholder="Логин"
          value={loginValue}
          onChange={(e) => setLoginValue(e.currentTarget.value)}
          className={styles.input}
        />

        <TextInput
          radius="xl"
          size="lg"
          placeholder="ФИО"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.currentTarget.value)}
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
        <Button type="submit" variant="light" radius="xl">
          Зарегестрироваться
        </Button>
      </form>

      <div>
        <p className={styles.item}>
          Вы уже зарегистрированы?
          <NavLink to="/login" className={styles.link}>
            Войти
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
