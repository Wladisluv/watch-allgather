import React, { useState } from 'react';

import { useAuth } from '../hooks/useAuth';

const Favorites = () => {
  const [isOpen, setOpen] = useState(false);

  const { email } = useAuth();

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const [isWatchingOpen, setWatchingOpen] = useState(false);

  const watchingOpen = () => {
    if (!isWatchingOpen && isWillWatchOpen) {
      setWillWatchOpen(isWillWatchOpen === false);
    } else if (!isWatchingOpen && isWatchedOpen) {
      setWatchedOpen(isWatchedOpen === false);
    }
    setWatchingOpen(!isWatchingOpen);
  };

  const [isWatchedOpen, setWatchedOpen] = useState(false);

  const watchedOpen = () => {
    if (!isWatchedOpen && isWillWatchOpen) {
      setWillWatchOpen(isWillWatchOpen === false);
    } else if (!isWatchedOpen && isWatchingOpen) {
      setWatchingOpen(isWatchingOpen === false);
    }
    setWatchedOpen(!isWatchedOpen);
  };

  const [isWillWatchOpen, setWillWatchOpen] = useState(false);

  const willWatchOpen = () => {
    if (!isWillWatchOpen && isWatchedOpen) {
      setWatchedOpen(isWatchedOpen === false);
    } else if (!isWillWatchOpen && isWatchingOpen) {
      setWatchingOpen(isWatchingOpen === false);
    }
    setWillWatchOpen(!isWillWatchOpen);
  };

  return (
    <div className="favorites">
      <div className="container">
        <div className="favorites-name">
          <p>{email}</p>
        </div>
        <div className="favorites-categories">
          <div className="favorites-categories__item" onClick={watchingOpen}>
            <p>Смотрю сейчас</p>
            <div
              className={`${isWatchingOpen ? 'favorites-categories__item__underline' : ''}`}></div>
          </div>

          <div className="favorites-categories__item" onClick={watchedOpen}>
            <p>Уже смотрел</p>
            <div
              className={`${isWatchedOpen ? 'favorites-categories__item__underline' : ''}`}></div>
          </div>

          <div className="favorites-categories__item" onClick={willWatchOpen}>
            <p>Буду смотреть</p>
            <div
              className={`${isWillWatchOpen ? 'favorites-categories__item__underline' : ''}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
