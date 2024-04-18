import { FC, useState, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, PasswordInput, TextInput, useMantineColorScheme } from '@mantine/core';
import styles from './login.module.css';
import { loginUser } from '@/utils/api';
import { useAppDispatch } from '@/utils/hooks/useApp';
import { loginFailed, loginPending, loginSuccess } from '@/services/slices/user-slice';

const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    dispatch(loginPending());
    try {
      const res = await loginUser(loginValue, passwordValue);
      dispatch(loginSuccess(res));
      navigate('/', { replace: true });
    } catch (error) {
      dispatch(loginFailed(error));
      setErrorMessage('Неверный логин или пароль');
    }
  };

  const linkColor = colorScheme === 'dark' ? '#66d9e8' : '#1864ab';
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
          error={errorMessage}
        />
        <Button type="submit" className={styles.button} variant="light" radius="xl">
          Войти
        </Button>
      </form>

      <div>
        <p className={styles.item}>
          Вы — новый пользователь?
          <NavLink style={{ color: linkColor }} to="/register" className={styles.link}>
            Зарегистрироваться
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
