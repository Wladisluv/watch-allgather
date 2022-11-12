import React from 'react';

function Header() {
  return (
    <div className='header'>
      <div className='container'>
          <div className='header__logo'>
              <h1>Watch Allgather</h1>
          </div>
          <div>
            <a className='header__sign-in' href='/'>Войти</a>
          </div>
      </div>
    </div>
  );
};

export default Header;