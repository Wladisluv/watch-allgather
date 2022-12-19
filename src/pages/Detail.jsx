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
            <div className="detail__film-bottom">
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
              <div className="detail-add-to-fav">
                <div className="detail-add-to-fav__item">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30">
                      <g id="_01_align_center" data-name="01 align center">
                        <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" />
                        <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                      </g>
                    </svg>
                    Смотрю
                  </button>
                </div>
                <div className="detail-add-to-fav__item">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Isolation_Mode"
                      data-name="Isolation Mode"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30">
                      <path d="M7.8,21.425A2.542,2.542,0,0,1,6,20.679L.439,15.121,2.561,13,7.8,18.239,21.439,4.6l2.122,2.121L9.6,20.679A2.542,2.542,0,0,1,7.8,21.425Z" />
                    </svg>
                    Просмотренно
                  </button>
                </div>
                <div className="detail-add-to-fav__item">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="30"
                      height="30">
                      <path d="M20.137,24a2.8,2.8,0,0,1-1.987-.835L12,17.051,5.85,23.169a2.8,2.8,0,0,1-3.095.609A2.8,2.8,0,0,1,1,21.154V5A5,5,0,0,1,6,0H18a5,5,0,0,1,5,5V21.154a2.8,2.8,0,0,1-1.751,2.624A2.867,2.867,0,0,1,20.137,24ZM6,2A3,3,0,0,0,3,5V21.154a.843.843,0,0,0,1.437.6h0L11.3,14.933a1,1,0,0,1,1.41,0l6.855,6.819a.843.843,0,0,0,1.437-.6V5a3,3,0,0,0-3-3Z" />
                    </svg>
                    Буду смотреть
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
