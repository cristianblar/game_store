import React, { ReactElement } from 'react';

import { BiCart, BiUser } from 'react-icons/bi';

import style from './NavMenu.module.sass';

function NavMenu(): ReactElement {
  return (
    <ul className={style.listContainer}>
      <li>
        <BiUser />
      </li>
      <li>
        <BiCart />
      </li>
    </ul>
  );
}

export default NavMenu;
