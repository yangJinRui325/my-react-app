import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import type { IVAppletComponent, IVAppletConfig } from '../typings/drag-type';
import style from './SideLeftBar.less';

import { baseComponents } from '../core/itemDesignConfig';

const grid: number = 8;

const boxStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: grid,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: grid,
  gridRowGap: grid,
};

console.log(baseComponents);

const SideLeftBar: React.FC = () => {
  const [appletUnit, setAppletUnit] = useState<IVAppletComponent[]>(baseComponents);
  return (
    <div className={style.wrapper}>
      <p>基础组件</p>
      <ReactSortable
        style={boxStyle}
        group={{ name: 'applet-design', pull: 'clone', put: false }}
        list={appletUnit}
        sort={false}
        item-key="type"
        ghostClass="moving"
        animation={180}
        setList={setAppletUnit}
        onEnd={(a) => {
          console.log(a);
        }}
        tag="ul"
      >
        {appletUnit.map((item) => (
          <li className={style.unitItem} data-compid={item.compId} key={item.id}>
            {item.label}
          </li>
        ))}
      </ReactSortable>
    </div>
  );
};

export default SideLeftBar;
