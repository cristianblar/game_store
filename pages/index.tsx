import React from 'react';

import Sidebar from '@containers/Sidebar/Sidebar';
import AllGames from '@containers/AllGames/AllGames';

import style from '../styles/index.module.sass';

export default function Home() {
  return (
    <div className={style.gridContainer}>
      <Sidebar />
      <AllGames />
    </div>
  );
}
