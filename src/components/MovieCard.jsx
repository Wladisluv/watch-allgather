import React from 'react';

import { Link } from 'react-router-dom';

import kinopoiskApi, { category } from '../api/kinopoiskApi';
import apiConfig from '../api/apiConfig';

const MovieCard = (props) => {
  const item = props.item;

  const link = '/' + category.films + '/' + (item.filmId || item.kinopoiskId);

  const bg = apiConfig.posterUrlPreview(`${item.filmId || item.kinopoiskId || item.imdbId}.jpg`);

  const cut = (text, limit) => {
    text = item.nameRu || item.nameOriginal || item.nameEn;
    limit = 30;
    text = text.trim();
    if (text.length <= limit) return text;

    text = text.slice(0, limit);

    return text.trim() + '...';
  };

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <i className="bx bx-play"></i>
      </div>
      <h3>{cut() || item.nameOriginal}</h3>
    </Link>
  );
};

export default MovieCard;
