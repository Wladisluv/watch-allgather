import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h1>Watch Allgather</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="header__sign-in">Войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
