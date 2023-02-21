import { React, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import { useAuth } from '../hooks/useAuth';

import userIcon from '../assets/img/user2.png';

const User = () => {
  const [isOpen, setOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email, token, id } = useAuth();
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
  localStorage.setItem('id', id);

  useEffect(() => {
    if (email === null) {
      localStorage.removeItem('email');
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      navigate('/login');
    }
  }, [isAuth, navigate, email]);

  const goToMain = (email) => {
    if (email !== null) {
      navigate('/');
    }
  };

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <div className="user" onClick={handleOpen}>
        <img className="user__icon" src={userIcon} alt="user" />
        <span className={`user__arrow${isOpen ? '-rotate' : ''}`}></span>
      </div>
      {isOpen ? (
        <div className="select">
          <div className="select__triangle"></div>
          <div className="select-navigation">
            <div className="select-navigation-header">
              <p>{`${email}`}</p>
            </div>
            <div>
              <ul className="select-navigation-list">
                <div className="select-navigation-list__item-wrapper">
                  <Link to="/profile/collection" className="select-navigation-list__link">
                    <div className="select-navigation-list__item-container">
                      <li>Моя коллекция</li>
                    </div>
                  </Link>
                </div>
                <div className="select-navigation-list__item-wrapper">
                  <Link
                    to="/login"
                    onClick={() => dispatch(removeUser(navigate('/login')))}
                    className="select-navigation-list__link">
                    <div className="select-navigation-list__item-container">
                      <li>Выйти</li>
                    </div>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default User;
