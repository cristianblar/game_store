import React, { ReactElement } from 'react';

import SortButton from '@components/SortButton/SortButton';
import GamesList from '@containers/GamesList/GamesList';

import style from './AllGames.module.sass';

interface Props {}

function AllGames({}: Props): ReactElement {
  return (
    <div className={style.mainContainer}>
      <h1 className={style.title}>All games</h1>
      <SortButton />
      <GamesList />
    </div>
  );
}

export default AllGames;
