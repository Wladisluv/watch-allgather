import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import Header from '../components/Header';
import User from '../components/User';
import Search from '../components/Search';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';

import { category, movieType, tvType } from '../api/kinopoiskApi';

import { useAuth } from '../hooks/useAuth';

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email, token, id } = useAuth();
  localStorage.setItem('email', email);
  localStorage.setItem('token', token);
  localStorage.setItem('id', id);
  useEffect(() => {
    if (isAuth) {
      navigate('/main');
    } else {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  const linkkk = 'top?type=TOP_100_POPULAR_FILMS&page=1';
  return (
    <div className="main">
      <Header
        right={
          <div className="header__right">
            <Search />
            <User email={email} logout={() => dispatch(removeUser(navigate('/login')))} />
          </div>
        }
      />
      <Filters categories="Все страны" genres="Все жанры" year="Все годы" />
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Лучшие фильмы</h2>
          </div>
          <MovieList category={category.films} type={movieType.top} />
        </div>
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Популярные фильмы</h2>
        </div>
        <MovieList
          category={category.films}
          type={movieType['top?type=TOP_100_POPULAR_FILMS&page=1']}
        />
      </div>

      {/* <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Популярные сериалы</h2>
        </div>
        <MovieList category={category.tv} type={tvType.popular} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Лучшие сериалы</h2>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Популярное аниме</h2>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div>

      <div className="section mb-3">
        <div className="section__header mb-2">
          <h2>Лучшее аниме</h2>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated} />
      </div> */}
    </div>
  );
};

export default MainPage;
