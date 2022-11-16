import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import Header from '../components/Header';
import User from '../components/User';
import Search from '../components/Search';
import CategoryFilters from '../components/CategoryFilters';

import { useAuth } from '../hooks/useAuth';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate('/main');
    }
  }, [isAuth, navigate]);

  return (
    <div className="main">
      <Header
        right={
          <div className="header__right">
            <Search />
            <User email={email} logout={() => dispatch(removeUser(navigate('/login')))} />
          </div>
        }
      />
      <CategoryFilters />
    </div>
  );
};

export default MainPage;
