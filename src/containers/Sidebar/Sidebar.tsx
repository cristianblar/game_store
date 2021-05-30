import React, { ReactElement, useRef } from 'react';

import SidebarSection from '@components/SidebarSection/SidebarSection';

import style from './Sidebar.module.sass';

function Sidebar(): ReactElement {
  const browseList = useRef<HTMLDivElement>(null);

  const handleClick: void = () =>
    browseList.current?.classList.toggle(style.visible);

  return (
    <aside className={style.mainContainer}>
      <h2 onClick={handleClick} className={style.title}>
        Browse...
      </h2>
      <div ref={browseList} className={style.sectionContainer}>
        <SidebarSection />
        <SidebarSection />
      </div>
    </aside>
  );
}

export default Sidebar;
