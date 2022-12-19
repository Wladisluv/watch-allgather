import React from 'react';

import Header from './Header';
import Search from './Search';
import User from './User';
import Favorites from './Favorites';

const Collection = () => {
  return (
    <div className="collection">
      <Header
        right={
          <div className="header__right">
            <Search />
            <User />
          </div>
        }
      />
      <Favorites />
    </div>
  );
};

export default Collection;
