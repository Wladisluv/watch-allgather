import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ signIn, userIcon, search, right }) => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/main">
          <div className="header__logo">
            <h1>Watch Allgather</h1>
          </div>
        </Link>
        {signIn}
        {right}
      </div>
    </div>
  );
};

export default Header;
