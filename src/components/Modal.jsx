import React from 'react';
import Form from './Form';

const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__close">
          <span onClick={() => setActive(false)}>&times;</span>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
