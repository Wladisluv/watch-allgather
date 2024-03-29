import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import Search from '../components/Search';

import kinopoiskApi, { category, movieType, tvType } from '../api/kinopoiskApi';

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  let listTitle;
  const setTitle = () => {
    if (props.category === category.films) {
      listTitle = 'Лучшие фильмы';
    } else if (props.category === category.popularFilms) {
      listTitle = 'Популярные фильмы';
    } else if (props.category === category.tv) {
      listTitle = 'Лучшие сериалы';
    } else if (props.category === category.anime) {
      listTitle = 'Лучшее аниме';
    }
  };
  setTitle();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        let pageNumber;
        switch (props.category) {
          case category.films:
            response = await kinopoiskApi.getMoviesList(
              'top?type=TOP_250_BEST_FILMS&',
              { params },
              (pageNumber = 1),
            );
            listTitle = 'asd';
            break;

          case category.popularFilms:
            response = await kinopoiskApi.getMoviesList(
              'top?type=TOP_100_POPULAR_FILMS&',
              { params },
              (pageNumber = 1),
            );
            break;

          case category.tv:
            response = await kinopoiskApi.getTvList(
              'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
              { params },
              (pageNumber = 1),
            );
            break;

          case category.anime:
            response = await kinopoiskApi.getTvList(
              'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
              { params },
              (pageNumber = 1),
            );
            break;
          default:
            response = await kinopoiskApi.getTvList(
              'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
              { params },
              (pageNumber = 1),
            );
        }
      } else {
        const params = {
          keyword: keyword,
        };
        response = await kinopoiskApi.search(props.category, { params });
      }
      setItems(response.items || response.films);
      setTotalPage(response.pagesCount || response.totalPages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      let pageNumber;
      const params = {
        page: pageNumber,
      };
      switch (props.category) {
        case category.films:
          response = await kinopoiskApi.getMoviesList(
            'top?type=TOP_250_BEST_FILMS&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.films]);
          break;

        case category.popularFilms:
          response = await kinopoiskApi.getMoviesList(
            'top?type=TOP_100_POPULAR_FILMS&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.films]);
          break;

        case category.tv:
          response = await kinopoiskApi.getTvList(
            'films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.items]);
          break;

        case category.anime:
          response = await kinopoiskApi.getTvList(
            'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.items]);
          break;
        default:
          response = await kinopoiskApi.getMoviesList(
            'top?type=TOP_250_BEST_FILMS&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.films]);
      }
    } else {
      const params = {
        keyword: keyword,
        page: page,
      };
      response = await kinopoiskApi.search(props.category, { params });
    }
    setPage(page + 1);
  };

  return (
    <>
      <div className="movie-grid">
        <p className="movie-grid__link">
          <Link to="/">Главная</Link> ➜ {listTitle}
        </p>
        <h2 className="movie-grid__list-title">{listTitle}</h2>
        <div className="movie-grid__list">
          {items.map((item, i) => (
            <MovieCard className="mcard" category={props.category} item={item} key={i} />
          ))}
        </div>
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <button className="movie-grid__loadmore__button" onClick={loadMore}>
            Загрузить еще
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;
