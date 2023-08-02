import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import type { IVAppletComponent, IVAppletConfig } from '../typings/drag-type';
import style from './SideLeftBar.less';

import { baseComponents } from '../core/itemDesignConfig';

import { generateKey } from '@/utils/applet-design';

import { cloneDeep } from 'lodash';

const grid: number = 8;

const boxStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: grid,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: grid,
  gridRowGap: grid,
};

const appletConfig: IVAppletConfig = {
  schemas: [],
  currentItem: {
    component: '',
    componentProps: {},
  },
  activeKey: 1,
};

console.log(baseComponents);

const SideLeftBar: React.FC = () => {
  const [appletUnit, setAppletUnit] = useState<IVAppletComponent[]>(baseComponents);
  return (
    <div className={style.wrapper}>
      <p>基础组件</p>
      <ReactSortable
        style={boxStyle}
        group={{ name: 'applet-unit', pull: false, put: false }}
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
          <li className={style.unitItem} key={item.id}>
            {item.label}
          </li>
        ))}
      </ReactSortable>
    </div>
  );
};

export default SideLeftBar;
