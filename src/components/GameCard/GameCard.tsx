import React, { ReactElement } from 'react';

import { BiStar } from 'react-icons/bi';

import style from './GameCard.module.sass';

interface Props {}

function GameCard({}: Props): ReactElement {
  return (
    <article className={style.mainContainer}>
      <img
        src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
        alt="Videogame cover"
      />
      <div className={style.textContainer}>
        <h2 className={style.gameName}>Grand Theft Auto IV</h2>
        <ul className={style.listContainer}>
          <li>PC</li>
          <li>PS4</li>
          <li>XBOX</li>
        </ul>
        <div className={style.detailsContainer}>
          <span className={style.gameRating}>
            <BiStar />
            4.95
          </span>
          <span className={style.gamePrice}>$ 10.99</span>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
