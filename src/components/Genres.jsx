import React from 'react';

const Genres = ({ genres }) => {
  return (
    <div className="genres-select">
      <div className="category-select-navigation">
        <div>
          <ul className="category-select-navigation-list">
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Все жанры')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Аниме')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Боевик')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Детектив')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Комедия')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Триллер')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(genres = 'Ужасы')}</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Genres;
