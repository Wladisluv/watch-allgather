import React from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        history('/main');
      })
      .catch(() => alert('Неверный логин или пароль'));
  };

  return (
    <Form
      title="Авторизация"
      link="/register"
      withoutAcc="Создать аккаунт"
      btnTitle="Войти"
      handleClick={handleLogin}
    />
  );
};

export default Login;
