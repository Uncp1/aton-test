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
  const [errorMessage, setErrorMessage] = useState('');
  const isButtonDisabled = !usernameValue || !loginValue || !passwordValue;
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const validatePassword = (password: string) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password);
    const noRussian = /[А-Яа-яЁё]/.test(password);

    if (noRussian) {
      setPasswordErrorMessage('Пароль не должен содержать кириллицу');
      return false;
    }
    if (password.length < minLength) {
      setPasswordErrorMessage('Пароль должен содержать не менее 8 символов');
      return false;
    }
    if (!hasUppercase) {
      setPasswordErrorMessage('Пароль должен содержать хотя бы одну заглавную букву');
      return false;
    }
    if (!hasLowercase) {
      setPasswordErrorMessage('Пароль должен содержать хотя бы одну строчную букву');
      return false;
    }
    if (!hasNumber) {
      setPasswordErrorMessage('Пароль должен содержать хотя бы одну цифру');
      return false;
    }
    if (!hasSpecialChar) {
      setPasswordErrorMessage('Пароль должен содержать хотя бы один специальный символ');
      return false;
    }
    setPasswordErrorMessage('');
    return true;
  };
  const fetchRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    dispatch(loginPending());
    const userData: UserData = {
      username: usernameValue,
      login: loginValue,
      password: passwordValue,
    };
    if (!validatePassword(passwordValue)) {
      return;
    }
    try {
      await registerUser(userData);
      const loginRes = await loginUser(loginValue, passwordValue);
      dispatch(loginSuccess(loginRes));
      navigate('/', { replace: true });
    } catch (error) {
      dispatch(loginFailed(error));
      setErrorMessage('Пользователь с таким логином уже существует');
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
          error={errorMessage}
        />

        <PasswordInput
          radius="xl"
          size="lg"
          placeholder="Пароль"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.currentTarget.value)}
          className={styles.input}
          error={passwordErrorMessage}
        />
        <Button disabled={isButtonDisabled} type="submit" variant="light" radius="xl">
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
