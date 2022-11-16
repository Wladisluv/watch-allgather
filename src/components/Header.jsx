import React from 'react';

const Header = ({ signIn, userIcon, search, right }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <h1>Watch Allgather</h1>
        </div>
        {signIn}
        {right}
      </div>
    </div>
  );
};

export default Header;
