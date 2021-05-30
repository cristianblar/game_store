import React, { ReactElement } from 'react';

import style from './SidebarSection.module.sass';

interface Props {}

function SidebarSection({}: Props): ReactElement {
  return (
    <section className={style.mainContainer}>
      <h2 className={style.title}>TITLE</h2>
      <ul className={style.listContainer}>
        <li>
          <img
            src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            alt="Genre logo"
            height="40"
            width="40"
          />
          PlayStation 4
        </li>
        <li>
          <img
            src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            alt="Genre logo"
            height="40"
            width="40"
          />
          Adventure
        </li>
        <li>
          <img
            src="https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
            alt="Genre logo"
            height="40"
            width="40"
          />
          123
        </li>
      </ul>
    </section>
  );
}

export default SidebarSection;
