import React, { ReactElement } from 'react';

import MainLogo from '@components/MainLogo/MainLogo';
import SearchBar from '@components/SearchBar/SearchBar';
import NavMenu from '@components/NavMenu/NavMenu';

import style from './Header.module.sass';

function Header(): ReactElement {
  return (
    <header className={style.mainContainer}>
      <figure className={style.logoContainer}>
        <MainLogo />
      </figure>
      <div className={style.searchBarContainer}>
        <SearchBar />
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
