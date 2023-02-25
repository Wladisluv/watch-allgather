import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const WelcomePage = () => {
  return (
    <div className="wrapper">
      <Header
        signIn={
          <Link to="/login">
            <button className="header__sign-in">Войти</button>
          </Link>
        }
      />
      <div className="content">
        <div className="content-left">
          <div className="content__descr">
            <p>
              Watch Allgather - проект который позволяет отслеживать новинки кино и сериалов, а
              также добавлять их в список отслеживаемых, произведений в процессе или уже
              завершенных.
            </p>
          </div>
          <div>
            <Link to="/login">
              <button className="content__btn">Войти</button>
            </Link>
          </div>
        </div>
        <div className="content__round"></div>
        <div className="content__img"></div>
      </div>
      <Footer />
    </div>
  );
};

export default WelcomePage;
