import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import MovieCard from '../components/MovieCard';

import kinopoiskApi, { category, movieType, tvType } from '../api/kinopoiskApi';

const Search = (props) => {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Найти" />
    </div>
  );
};

export default Search;
