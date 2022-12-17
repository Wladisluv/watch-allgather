import { React, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

import kinopoiskApi from '../api/kinopoiskApi';

import Header from '../components/Header';
import User from '../components/User';
import Search from '../components/Search';
import Filters from '../components/Filters';
import MovieList from '../components/MovieList';
import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';

import { category, movieType, tvType } from '../api/kinopoiskApi';

import { useAuth } from '../hooks/useAuth';

const MainPage = (props) => {
  const [items, setItems] = useState([]);
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

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword) {
        const params = {
          keyword: keyword,
        };
        response = await kinopoiskApi.search(props.category, { params });
        setItems(response.films);
        console.log(response);
      }
    };
    getList();
  }, [props.category, keyword]);

  return (
    <div className="main">
      <Header
        right={
          <div className="header__right">
            <div className="search">
              <input
                className="search__input"
                type="text"
                placeholder="Найти"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <User email={email} logout={() => dispatch(removeUser(navigate('/login')))} />
          </div>
        }
      />
      <Filters countries="Все страны" genres="Все жанры" year="Все годы" />

      {keyword <= 0 ? (
        <div className="films">
          <div className="container">
            <div className="films__item">
              <Link className="films__item__catalog-link" to="/catalog/films/top250">
                <div className="films__item-header">
                  <div className="films__item-header__title">
                    <h2>Лучшие фильмы</h2>
                  </div>
                  <div className="films__item-header__arrow"></div>
                </div>
              </Link>
              <MovieList category={category.films} type={'top?type=TOP_250_BEST_FILMS&'} />
            </div>

            <div className="films__item">
              <Link className="films__item__catalog-link" to="/catalog/popularFilms/popular-films">
                <div className="films__item-header">
                  <div className="films__item-header__title">
                    <h2>Популярные фильмы</h2>
                  </div>
                  <div className="films__item-header__arrow"></div>
                </div>
              </Link>
              <MovieList category={category.films} type={'top?type=TOP_100_POPULAR_FILMS&'} />
            </div>

            <div className="films__item">
              <Link className="films__item__catalog-link" to="/catalog/tv/top-series">
                <div className="films__item-header">
                  <div className="films__item-header__title">
                    <h2>Лучшие сериалы</h2>
                  </div>
                  <div className="films__item-header__arrow"></div>
                </div>
              </Link>
              <MovieList
                category={category.tv}
                type={
                  'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&'
                }
              />
            </div>

            <div className="films__item">
              <Link className="films__item__catalog-link" to="/catalog/topAnime/top-anime">
                <div className="films__item-header">
                  <div className="films__item-header__title">
                    <h2>Лучшее аниме</h2>
                  </div>
                  <div className="films__item-header__arrow"></div>
                </div>
              </Link>
              <MovieList
                category={category.tv}
                type={
                  'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&'
                }
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="movie-grid">
            {items.map((item, i) => (
              <MovieCard className="mcard" category={props.category} item={item} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
