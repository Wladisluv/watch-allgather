import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        navigate('/');
      })
      .catch(() =>
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Введен неверный логин или пароль',
          showConfirmButton: false,
          background: '#262C2C',
          width: '30em',
          timer: 1000,
        }),
      );
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
