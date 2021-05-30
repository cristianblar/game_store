import React, { ReactElement } from 'react';

import GameCard from '@components/GameCard/GameCard';

import style from './GamesList.module.sass';

interface Props {}

function GamesList({}: Props): ReactElement {
  return (
    <div className={style.mainContainer}>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  );
}

export default GamesList;
