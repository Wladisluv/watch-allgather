import React from 'react';
import { useNavigate } from 'react-router-dom';

import Form from './Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return (
    <Form
      title="Регистрация"
      link="/login"
      withoutAcc="Войти"
      btnTitle="Зарегистрироваться"
      handleClick={handleRegister}
    />
  );
};

export default Register;
