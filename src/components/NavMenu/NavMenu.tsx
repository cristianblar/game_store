/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import Link from 'next/link';

import { BiCart, BiUser } from 'react-icons/bi';

import style from './NavMenu.module.sass';

// useEffect
// className={window.location.pathname === '/login' ? 'active' : ''}
// className={window.location.pathname === '/cart' ? 'active' : ''}

function NavMenu(): ReactElement {
  return (
    <ul className={style.listContainer}>
      <li>
        <Link href="/login">
          <a>
            <BiUser />
          </a>
        </Link>
      </li>
      <li>
        <Link href="/cart">
          <a>
            <BiCart />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default NavMenu;
