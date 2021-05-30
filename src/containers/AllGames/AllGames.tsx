import React, { ReactElement } from 'react';

import SortButton from '@components/SortButton/SortButton';
import GamesList from '@containers/GamesList/GamesList';

import style from './AllGames.module.sass';

interface Props {}

function AllGames({}: Props): ReactElement {
  return (
    <div className={style.mainContainer}>
      <SortButton />
      <GamesList />
    </div>
  );
}

export default AllGames;
