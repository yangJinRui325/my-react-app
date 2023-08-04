import React, { useReducer } from 'react';
import type { SortableEvent } from 'react-sortablejs';
import { ReactSortable } from 'react-sortablejs';
import { cloneDeep } from 'lodash';
import { generateKey } from '@/utils/applet-design';

import type { IVAppletComponent, IVAppletConfig } from '../typings/drag-type';
import { Flex, Box } from 'grid-styled';
import style from './Container.less';

import { baseComponents } from '../core/itemDesignConfig';

import GoodsList from '../components/GoodsList';
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
  // flexDirection: 'column'
};

const componentMap = {
  GoodsList: <GoodsList />,
  Divider: <Divider />,
};

const pages: IVAppletConfig = {
  schemas: [],
  currentItem: {},
};

const findComp = (compId: string): IVAppletComponent => {
  return baseComponents.find((item) => item.compId === compId);
};

// 添加唯一key
const handleListPushDrag = (item: IVAppletComponent) => {
  const formItem = cloneDeep(item);
  generateKey(formItem);
  return formItem;
};

const pagesReducer = (state: IVAppletConfig, action) => {
  const { pageList, currentItem } = action;

  return {
    schemas: pageList,
    currentItem: currentItem,
  };
};

const Container: React.FC = () => {
  // const componentToRender = 'GoodsList';
  // const DynamicComponent = componentMap[componentToRender];

  const [pagesState, dispatchPages] = useReducer(pagesReducer, pages);

  const addComponent = (
    evt: SortableEvent,
    newIndex: number,
    compList: IVAppletComponent[],
  ): void => {
    const { compid = '' } = evt.item.dataset;
    const comp = findComp(compid);
    // 非注册组件返回
    if (!comp) return;
    const item = handleListPushDrag(comp);
    compList.splice(newIndex, 0, item);
    dispatchPages({ pageList: compList, currentItem: item });
  };

  return (
    <div style={appletPageStyle}>
      <Flex flexDirection={'column'} style={{ overflow: 'hidden', height: '100%' }}>
        <div className={style.appletHeader}>
          <img src="https://m.jbzyun.cn/mshop/static/img/miniprogram-nav.f58e1d4.png" alt="" />
        </div>
        <ReactSortable
          style={{ flex: 1, overflowY: 'auto' }}
          group={{ name: 'applet-design', pull: true, put: true }}
          list={pagesState.schemas}
          sort={true}
          ghostClass="moving"
          animation={180}
          // 废弃他，用on-event来触发
          setList={() => {}}
          onAdd={(evt) => {
            const { newIndex = 0 } = evt;
            addComponent(evt, newIndex, pagesState.schemas);
          }}
        >
          {pagesState.schemas.map((item: IVAppletComponent) => (
            <div key={item.compId}>{componentMap[item.component]}</div>
          ))}
        </ReactSortable>
      </Flex>
    </div>
  );
};

export default Container;
