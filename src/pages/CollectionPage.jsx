import React, { useState } from 'react';

import { useAuth } from '../hooks/useAuth';

import favotireMoviesIds from '../pages/Detail';

import Header from '../components/Header';
import Search from '../components/Search';
import User from '../components/User';
import MovieCard from '../components/MovieCard';
// import Favorites from '../components/Favorites';

const Collection = () => {
  const [isOpen, setOpen] = useState(false);

  const [items, setItems] = useState([]);

  const { email } = useAuth();

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const [isWatchingOpen, setWatchingOpen] = useState(false);

  const watchingOpen = () => {
    if (!isWatchingOpen && isWillWatchOpen) {
      setWillWatchOpen(isWillWatchOpen === false);
      setItems(localStorage.getItem('will-watch-movies') === false);
    } else if (!isWatchingOpen && isWatchedOpen) {
      setWatchedOpen(isWatchedOpen === false);
      setItems(localStorage.getItem('watched-movies') === false);
    }
    setWatchingOpen(!isWatchingOpen);

    if (localStorage.getItem('watching-movies')) {
      setItems([...JSON.parse(localStorage.getItem('watching-movies'))]);
    }
  };

  const [isWatchedOpen, setWatchedOpen] = useState(false);

  const watchedOpen = () => {
    if (!isWatchedOpen && isWillWatchOpen) {
      setWillWatchOpen(isWillWatchOpen === false);
      setItems(localStorage.getItem('will-watch-movies') === false);
    } else if (!isWatchedOpen && isWatchingOpen) {
      setWatchingOpen(isWatchingOpen === false);
      setItems(localStorage.getItem('watching-movies') === false);
    }
    setWatchedOpen(!isWatchedOpen);

    if (localStorage.getItem('watched-movies')) {
      setItems([...JSON.parse(localStorage.getItem('watched-movies'))]);
    }
  };

  const [isWillWatchOpen, setWillWatchOpen] = useState(false);

  const willWatchOpen = () => {
    if (!isWillWatchOpen && isWatchedOpen) {
      setWatchedOpen(isWatchedOpen === false);
      setItems(localStorage.getItem('watched-movies') === false);
    } else if (!isWillWatchOpen && isWatchingOpen) {
      setWatchingOpen(isWatchingOpen === false);
      setItems(localStorage.getItem('watching-movies') === false);
    }
    setWillWatchOpen(!isWillWatchOpen);

    if (localStorage.getItem('will-watch-movies')) {
      setItems([...JSON.parse(localStorage.getItem('will-watch-movies'))]);
    }
  };

  return (
    <div className="collection">
      <Header
        right={
          <div className="header__right">
            <Search />
            <User />
          </div>
        }
      />
      {/* <Favorites /> */}
      <div className="favorites">
        <div className="container">
          <div className="favorites-name">
            <p>{email}</p>
          </div>
          <div className="favorites-categories">
            <div className="favorites-categories__item" onClick={watchingOpen}>
              <p>Смотрю сейчас</p>
              <div
                className={`${
                  isWatchingOpen ? 'favorites-categories__item__underline' : ''
                }`}></div>
            </div>

            <div className="favorites-categories__item" onClick={watchedOpen}>
              <p>Просмотренно</p>
              <div
                className={`${isWatchedOpen ? 'favorites-categories__item__underline' : ''}`}></div>
            </div>

            <div className="favorites-categories__item" onClick={willWatchOpen}>
              <p>Буду смотреть</p>
              <div
                className={`${
                  isWillWatchOpen ? 'favorites-categories__item__underline' : ''
                }`}></div>
            </div>
          </div>
        </div>
      </div>
      {(isWatchingOpen || isWatchedOpen || isWillWatchOpen) && items >= 0 ? (
        <div className="qweqwe"></div>
      ) : (
        <div className="container">
          <div className="movie-grid__list">
            {items.map((item, i) => (
              <MovieCard className="mcard" item={item} key={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
