import React from 'react';

const Years = ({ years }) => {
  return (
    <div className="years-select">
      <div className="category-select-navigation">
        <div>
          <ul className="category-select-navigation-list">
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = 'Все годы')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = '2022-2015')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = '2015-2010')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = '2010-2000')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = '2000-1990')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(years = '1990-1970')}</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Years;
