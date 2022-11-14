import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import { useAuth } from '../hooks/useAuth';

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { isAuth, email } = useAuth();
  return isAuth ? (
    <div>
      <h1>Main-Page</h1>
      <button onClick={() => dispatch(removeUser())}>Выйти</button>
    </div>
  ) : (
    history('/login')
  );
};

export default MainPage;
