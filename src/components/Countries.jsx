import React from 'react';

const Countries = ({ countries }) => {
  return (
    <div className="category-select">
      <div className="category-select-navigation">
        <div>
          <ul className="category-select-navigation-list">
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(countries = 'Все страны')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(countries = 'Америка')}</li>
              </div>
            </div>
            <div className="category-select-navigation-list__item-wrapper">
              <div className="category-select-navigation-list__item-container">
                <li>{(countries = 'Россия')}</li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countries;
