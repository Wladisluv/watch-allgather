import { React, useState } from 'react';

import Countries from './Countries';
import Genres from './Genres';
import Years from './Years';

const Filters = ({ countries, genres, year }) => {
  const [isCountriesOpen, setCountriesOpen] = useState(false);

  const CountriesOpen = () => {
    if (!isCountriesOpen && isYearsOpen) {
      setYearsOpen(isYearsOpen === false);
    } else if (!isCountriesOpen && isGenresOpen) {
      setGenresOpen(isGenresOpen === false);
    }
    setCountriesOpen(!isCountriesOpen);
  };

  const [isGenresOpen, setGenresOpen] = useState(false);

  const genresOpen = () => {
    if (!isGenresOpen && isYearsOpen) {
      setYearsOpen(isYearsOpen === false);
    } else if (!isGenresOpen && isCountriesOpen) {
      setCountriesOpen(isCountriesOpen === false);
    }
    setGenresOpen(!isGenresOpen);
  };

  const [isYearsOpen, setYearsOpen] = useState(false);

  const yearsOpen = () => {
    if (!isYearsOpen && isGenresOpen) {
      setGenresOpen(isGenresOpen === false);
    } else if (!isYearsOpen && isCountriesOpen) {
      setCountriesOpen(isCountriesOpen === false);
    }
    setYearsOpen(!isYearsOpen);
  };

  const filterClose = () => {
    if (isCountriesOpen) {
      setCountriesOpen(!isCountriesOpen);
    } else if (isGenresOpen) {
      setGenresOpen(!isGenresOpen);
    } else if (isYearsOpen) {
      setYearsOpen(!isYearsOpen);
    }
  };

  return (
    <div className="category-filters">
      <section className="category-filters-container">
        <div className="category-filters-wrapper">
          <div
            className={`category-filters__select-wrapper${isCountriesOpen ? '-clicked' : ''}`}
            onClick={CountriesOpen}>
            <div className="category-filters__select">
              {countries}
              <span
                className={`category-filters__select__arrow${
                  isCountriesOpen ? '-rotate' : ''
                }`}></span>
            </div>
          </div>
          <div
            className={`category-filters__select-wrapper${isGenresOpen ? '-clicked' : ''}`}
            onClick={genresOpen}>
            <div className="category-filters__select">
              {genres}
              <span
                className={`category-filters__select__arrow${
                  isGenresOpen ? '-rotate' : ''
                }`}></span>
            </div>
          </div>
          <div
            className={`category-filters__select-wrapper${isYearsOpen ? '-clicked' : ''}`}
            onClick={yearsOpen}>
            <div className="category-filters__select">
              {year}
              <span
                className={`category-filters__select__arrow${isYearsOpen ? '-rotate' : ''}`}></span>
            </div>
          </div>
        </div>
      </section>
      {isCountriesOpen ? <Countries /> : null}
      {isGenresOpen ? <Genres /> : null}
      {isYearsOpen ? <Years /> : null}
    </div>
  );
};

export default Filters;
