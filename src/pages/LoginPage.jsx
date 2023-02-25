import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../components/Login';

const LoginPage = () => {
  return (
    <div className="auth">
      <h1 className="auth__title">Watch Allgather</h1>
      <Link to="/welcome">
        <span className="auth__close">&times;</span>
      </Link>
      <Login />
    </div>
  );
};

export default LoginPage;
