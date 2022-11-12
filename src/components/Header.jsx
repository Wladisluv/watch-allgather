import React, { useState } from 'react';
import Modal from './Modal';

const Header = () => {
  const [modalActive, setModalActive] = useState(false);
 
  return (
    <div className='header'>
      <div className='container'>
          <div className='header__logo'>
              <h1>Watch Allgather</h1>
          </div>
          <div>
            <button className='header__sign-in' onClick={() => setModalActive(true)}>Войти</button>
          </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Header;