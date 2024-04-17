import { FC, FormEvent, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import styles from './register.module.css';
import { loginUser, registerUser } from '@/utils/api';
import { useAppDispatch } from '@/utils/hooks/useApp';
import { loginFailed, loginPending, loginSuccess } from '@/services/slices/user-slice';
import { UserData } from '@/utils/types';

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState('');
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const fetchRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginPending());
    const userData: UserData = {
      username: usernameValue,
      login: loginValue,
      password: passwordValue,
    };
    try {
      await registerUser(userData);
      const loginRes = await loginUser(loginValue, passwordValue);
      dispatch(loginSuccess(loginRes));
      navigate('/', { replace: true });
    } catch (error) {
      dispatch(loginFailed(error));
      //setErrorMessage('Неверный логин или пароль');
    }
  };

  return (
    <main className={styles.layout}>
      <form className={styles.form} onSubmit={fetchRegister}>
        <h2 className={styles.title}>Регистрация</h2>

        <TextInput
          radius="xl"
          size="lg"
          placeholder="ФИО"
          value={usernameValue}
          onChange={(e) => setUsernameValue(e.currentTarget.value)}
          className={styles.input}
        />

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
