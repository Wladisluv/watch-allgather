import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/MainPage';
import Catalog from '../components/Catalog';
import Detail from '../pages/Detail';

const Routes1 = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" component={Catalog} />
      <Route path="/:category/:filmId" component={Detail} />
      <Route path="/:category" component={Catalog} />
      <Route path="/" exact component={Home} />
    </Routes>
  );
};

export default Routes1;
