import React from 'react';
import { Link } from 'react-router-dom';

import Register from '../components/Register';

const RegisterPage = () => {
  return (
    <div className="auth">
      <h1 className="auth__title">Watch Allgather</h1>
      <Link to="/">
        <span className="auth__close">&times;</span>
      </Link>
      <Register />
    </div>
  );
};

export default RegisterPage;
