import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import MovieCard from '../components/MovieCard';
import Search from '../components/Search';

import kinopoiskApi, { category, movieType, tvType } from '../api/kinopoiskApi';

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

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
            console.log(response);
            break;

          case category.topAnime:
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
        console.log(response);
      }
      setItems(response.items || response.films);
      setTotalPage(response.pagesCount || response.totalPages);
      console.log(response.totalPages, response.pagesCount);
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

        case category.topAnime:
          response = await kinopoiskApi.getTvList(
            'films?genres=24&order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.items]);
          console.log(response);
          break;
        default:
          response = await kinopoiskApi.getMoviesList(
            'top?type=TOP_250_BEST_FILMS&',
            { params },
            page + 1,
          );
          setItems([...items, ...response.films]);
          console.log(response);
      }
    } else {
      const params = {
        keyword: keyword,
        page: page,
      };
      response = await kinopoiskApi.search(props.category, { params });
    }
    setPage(page + 1);
    console.log(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <Search />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard className="mcard" category={props.category} item={item} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <button className="small" onClick={loadMore}>
            Load more
          </button>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;
