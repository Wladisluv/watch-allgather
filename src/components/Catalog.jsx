import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import MovieGrid from '../components/MovieGrid';
import Header from './Header';
import Search from './Search';
import User from './User';
import MovieCard from './MovieCard';

import kinopoiskApi, { category, movieType, tvType } from '../api/kinopoiskApi';

const Catalog = (props) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);

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
    <>
      <div>
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
              <User />
            </div>
          }
        />
        {keyword <= 0 ? (
          <div className="container">
            <div className="section mb-3">
              <MovieGrid category={category} />
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="movie-grid__list">
              {items.map((item, i) => (
                <MovieCard className="mcard" category={props.category} item={item} key={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Catalog;
