import React, { ReactElement } from 'react';

import style from './SortButton.module.sass';

interface Props {}

function SortButton({}: Props): ReactElement {
  return (
    <label className={style.labelContainer} htmlFor="sortOption">
      <span>Sort by: </span>
      <select className={style.selection} name="sortOption" id="sortOption">
        <option value="highRating">Higher rating</option>
        <option value="lowRating">Lower rating</option>
        <option value="lowPrice">Lower price</option>
        <option value="highPrice">Higher price</option>
      </select>
    </label>
  );
}

export default SortButton;
