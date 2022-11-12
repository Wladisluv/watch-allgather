import React, { useState, useCallback } from 'react';

const Modal = ({active, setActive}) => {

  const useToggle = (initialState = false) => {

    const [state, setState] = useState(initialState);
    
    const toggle = useCallback(() => setState(state => !state), []);
    
    return [state, toggle]
}

  const [isTextChanged, setIsTextChanged] = useToggle();
    
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <div className='modal__close' ><span onClick={() => setActive(false)}>&times;</span></div>
               <h1 className='modal__title'>{isTextChanged ? 'Регистрация' : 'Авторизация'}</h1> 
              <hr/>
              <div className='inputs'>
                <div className='inputs-inner'>
                <p>Email</p>
                <input className='inputs__item' type="text" placeholder='Введите Ваш email' />
                </div>
                <div className='inputs-inner'>
                <p>Пароль</p>
                <input className='inputs__item' type="password" placeholder='Введите Ваш пароль' />
                </div>
              </div>
              <div className="sign-button">
                <button className='sign-button__item'>{isTextChanged ? 'Зарегистрироваться' : 'Войти'}</button> 
              </div>
              <div className='without-acc'>
              <button onClick={setIsTextChanged}>{isTextChanged ? 'Войти' : 'Создать аккаунт'}</button>
              </div>
        </div>
    </div>
  );
};

export default Modal;