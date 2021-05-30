import React from 'react';

import Header from '@containers/Header/Header';

import style from './Layout.module.sass';

interface Props {
  children: JSX.Element;
}

export default function Home({ children }: Props) {
  return (
    <div className={style.mainWrapper}>
      <Header />
      { children }
    </div>
  );
}
