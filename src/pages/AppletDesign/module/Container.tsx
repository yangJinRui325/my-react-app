import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import type { IVAppletComponent, IMoveResult } from '../typings/drag-type';
import { Flex } from 'grid-styled';
import style from './Container.less';

import GoodList from '../components/GoodsList';
import Divider from '../components/Divider';

const appletPageStyle: React.CSSProperties = {
  width: 377,
  border: '1px dashed #e5e5e5',
  height: '700px',
  overflowY: 'auto',
  margin: '0 auto',
  background: '#fff',
};

const grid: number = 8;

const boxStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: grid,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridColumnGap: grid,
  gridRowGap: grid,
};

const componentMap = {
  GoodList: GoodList,
  Divider: Divider,
};

const Container: React.FC = () => {
  const [appletPage, setAppletPage] = useState<IVAppletComponent[]>([]);
  const [appletUnit, setAppletUnit] = useState<IVAppletComponent[]>([]);

  const componentToRender = 'GoodList';
  const DynamicComponent = componentMap[componentToRender];
  return (
    <div style={appletPageStyle}>
      <ReactSortable
        group={{ name: 'applet-unit', pull: true, put: true }}
        component-data={{ name: 'list', tag: 'div', type: 'transition-group' }}
        list={appletPage}
        sort={true}
        ghostClass="moving"
        animation={180}
        setList={setAppletPage}
      >
        {appletPage.map((item) => (
          <div key={item.id}>
            {item.name}
            {/* <DynamicComponent /> */}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default Container;
