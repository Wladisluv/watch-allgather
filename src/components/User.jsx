import { React, useState } from 'react';

import userIcon from '../assets/img/user2.png';

const User = ({ email, logout }) => {
  const [isOpen, setOpen] = useState(false);

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
              <p>{email}</p>
            </div>
            <div>
              <ul className="select-navigation-list">
                <div className="select-navigation-list__item-wrapper">
                  <a href="/" className="select-navigation-list__link">
                    <div className="select-navigation-list__item-container">
                      <li>Моя коллекция</li>
                    </div>
                  </a>
                </div>
                <div className="select-navigation-list__item-wrapper">
                  <a href="/login" onClick={logout} className="select-navigation-list__link">
                    <div className="select-navigation-list__item-container">
                      <li>Выйти</li>
                    </div>
                  </a>
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