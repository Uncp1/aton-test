import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './register.module.css';
import { loginUser } from '@/utils/api';

const RegisterPage: FC = () => {
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const fetchRegister = async () => {
    const res = await loginUser(usernameValue, passwordValue);
    return res;
  };

  return (
    <main className={styles.layout}>
      <form onSubmit={fetchRegister}>
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
          Зарегестрироваться
        </Button>
      </form>

      <div className={styles.login}>
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
