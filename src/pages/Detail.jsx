import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import kinopoiskApi from '../api/kinopoiskApi';
import apiConfig from '../api/apiConfig';

import MovieList from '../components/MovieList';

const Detail = () => {
  const { category, filmId, kinopoiskId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      let response = await kinopoiskApi.detail(category, filmId || kinopoiskId, {
        params: {},
      });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, filmId, kinopoiskId]);

  // useEffect(() => {
  //   const getSeasons = async () => {
  //     const response = await kinopoiskApi.getSeasonsList(category, filmId, {
  //       params: {},
  //     });
  //   };
  //   getSeasons();
  // }, [category, filmId]);

  return (
    <>
      {item && (
        <div className="detail">
          <div className="container">
            <div className="detail__top">
              <div className="detail__top__film-poster">
                <div
                  className="detail__top__film-poster__img"
                  style={{
                    backgroundImage: `url(${apiConfig.posterUrl(`${filmId || kinopoiskId}.jpg`)})`,
                  }}></div>
              </div>

              <div className="detail__top__film-about">
                <div className="detail__top__film-title">
                  <h1 className="detail__top__film-title__title">
                    {`${item.nameRu} (${item.year})` || item.nameOriginal}
                  </h1>
                </div>

                <div className="detail__top__film-descr">
                  <p className="detail__top__film-descr__descr">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="detail__film-about">
              <p>
                {item.ratingImdb === null ? 'Рейтинг ожидания' : 'Рейтинг'}:{' '}
                <span
                  className="detail__film-about__rating"
                  style={{
                    color: item.ratingImdb >= 7 ? 'green' : 'yellow',
                  }}>
                  {item.ratingImdb || item.ratingAwait}
                </span>
              </p>
              <p>
                Страна:{' '}
                {item.countries.slice(0, 1).map((countries) => (
                  <span key={item}>{countries.country}</span>
                ))}
              </p>
              <p>
                Жанр:{' '}
                {item.genres.slice(0, 5).map((genres, i) => (
                  <span key={i} className="genres__item">
                    {genres.genre.trim() + ' '}
                  </span>
                ))}
              </p>
              <p>
                {item.filmLength ? 'Длительность: ' : ' '}
                <span>
                  {item.filmLength <= 59
                    ? item.filmLength
                    : item.filmLength + ' / ' + (item.filmLength / 60).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="detail-info">
              {/* <div className="genres">
                  {item.genres &&
                    item.genres.slice(0, 5).map((genre, i) => (
                      <span key={i} className="genres__item">
                        {genre.name}
                      </span>
                    ))}
                </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
