import React from 'react';

import { useParams } from 'react-router';

import MovieGrid from '../components/MovieGrid';

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
