import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import MovieCard from '../components/MovieCard';

import kinopoiskApi, { category, movieType, tvType } from '../api/kinopoiskApi';

const Search = (props) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Найти"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default Search;
