/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import Link from 'next/link';

import MainLogo from '@components/MainLogo/MainLogo';
import SearchBar from '@components/SearchBar/SearchBar';
import NavMenu from '@components/NavMenu/NavMenu';

import style from './Header.module.sass';

function Header(): ReactElement {
  return (
    <header className={style.mainContainer}>
      <figure className={style.logoContainer}>
        <Link href="/">
          <a>
            <MainLogo />
          </a>
        </Link>
      </figure>
      <div className={style.searchBarContainer}>
        <SearchBar />
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
