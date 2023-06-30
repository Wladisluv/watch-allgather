import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import kinopoiskApi, { category } from '../api/kinopoiskApi';
import apiConfig from '../api/apiConfig';

import 'swiper/css/navigation';

import MovieCard from './MovieCard';

const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.films:
            response = await kinopoiskApi.getMoviesList(props.type, { params });
            setItems(response.films);
            break;
          default:
            response = await kinopoiskApi.getTvList(props.type, { params });
            setItems(response.items);
        }
      } else {
        response = await kinopoiskApi.similar(props.category, props.id);
      }
    };
    getList();
  }, []);

  return (
    <div className="movie-list">
      <div className="container">
        <div className="swiper-container">
          <Swiper
            grabCursor={true}
            spaceBetween={15}
            slidesPerGroup={1}
            slidesPerView={'auto'}
            navigation={true}
            modules={[Navigation]}>
            {items?.map((item, i) => (
              <SwiperSlide key={i}>
                <MovieCard item={item} category={props.category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
