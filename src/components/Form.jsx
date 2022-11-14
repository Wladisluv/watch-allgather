import { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ title, withoutAcc, link, btnTitle, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="form">
      <div className="inputs">
        <h1 className="inputs__title">{title}</h1>
        <div className="inputs-inner">
          <input
            className="inputs__item"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="inputs-inner">
          <input
            className="inputs__item"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Пароль"
          />
        </div>
        <div className="without-acc">
          <Link to={link}>
            <button>{withoutAcc}</button>
          </Link>
        </div>
        <div className="sign-button">
          <button className="sign-button__item" onClick={() => handleClick(email, pass)}>
            {btnTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
