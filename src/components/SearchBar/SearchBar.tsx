import React, { ReactElement } from 'react';

import { BiSearch } from 'react-icons/bi';

import style from './SearchBar.module.sass';

function SearchBar(): ReactElement {
  return (
    <div className={style.mainContainer}>
      <input
        className={style.searchBar}
        type="text"
        placeholder="Search a game"
      />
      <BiSearch className={style.searchIcon} />
    </div>
  );
}

export default SearchBar;
