import { React } from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        );
        localStorage.setItem('email', email);
        navigate('/main');
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
