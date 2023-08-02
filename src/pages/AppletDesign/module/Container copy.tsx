import React from 'react';
import type {
  DropResult,
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
  DraggableLocation,
} from 'react-beautiful-dnd';
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd';
import type { IItem, IMoveResult } from '../typings/drag-type';
import { Flex } from 'grid-styled';
import style from './Container.less';

const grid: number = 8;

const getListStyle = (isDraggingOver: boolean): React.CSSProperties => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 300,
  minHeight: 400,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const getItemStyle = (draggableStyle: any, isDragging: boolean) => ({
  userSelect: 'none',
  padding: 2 * grid,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const mockItems = (count: number, offset: number = 0): IItem[] => {
  return Array.from({ length: count }, (v, k) => k).map((k) => ({
    content: `item ${k + offset}`,
    id: `item-${k + offset}`,
  }));
};

let appletUnitList: IItem[] = mockItems(9, 0); // 组件的卡片
let appletPageList: IItem[] = mockItems(3, 50); // 小程序的页面
// const appletData: { appletUnitList: IItem[]; appletPageList: IItem[] } = {
//   appletUnitList: mockItems(10, 0),
//   appletPageList: mockItems(3, 50),
// };

// const id2List = {
//   appletUnit: 'appletUnitList',
//   appletPage: 'appletPageList',
// };

const getList = (id: string): IItem[] => {
  if (id === 'appletUnit') {
    return appletUnitList;
  } else if (id === 'appletPage') {
    return appletPageList;
  }
  return [];
};

const reorder = (list: IItem[], startIndex: number, endIndex: number): IItem[] => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: IItem[],
  destination: IItem[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation,
): IMoveResult | any => {
  const sourceClone = [...source];
  const destClone = [...destination];
  // const [removed] = sourceClone.splice(droppableSource.index, 1);
  const [removed] = sourceClone.filter((item, index) => index === droppableSource.index);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const onDragEnd = (result: DropResult): void => {
  const { source, destination } = result;

  if (!destination) {
    return;
  }

  if (source.droppableId === destination.droppableId) {
    const items = reorder(getList(source.droppableId), source.index, destination.index);

    if (source.droppableId === 'appletPage') {
      appletPageList = items;
      // state = { ...this.state, selected: items };
    } else if (source.droppableId === 'appletUnit') {
      // state = { ...this.state, items };
      appletUnitList = items;
    }
  } else {
    const resultFromMove: IMoveResult = move(
      getList(source.droppableId),
      getList(destination.droppableId),
      source,
      destination,
    );
    appletUnitList = resultFromMove.appletUnit;
    appletPageList = resultFromMove.appletPage;
  }
};

const Container: React.FC = () => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex justifyContent={'space-between'}>
        <Droppable droppableId="appletUnit" isDropDisabled={true}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {appletUnitList.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(
                      providedDraggable: DraggableProvided,
                      snapshotDraggable: DraggableStateSnapshot,
                    ) => {
                      // extending the DraggableStyle with our own inline styles
                      // const _style = {
                      //   ...providedDraggable.draggableProps.style,
                      //   backgroundColor: snapshotDraggable.isDragging ? 'blue' : 'white',
                      //   fontSize: 18,
                      //   height: 30,
                      // };
                      return (
                        <>
                          <div
                            className={style.unitItem}
                            ref={providedDraggable.innerRef}
                            {...providedDraggable.draggableProps}
                            {...providedDraggable.dragHandleProps}
                            // style={_style}
                            // style={getItemStyle(
                            //   providedDraggable.draggableProps.style,
                            //   snapshotDraggable.isDragging,
                            // )}
                          >
                            {item.content}
                          </div>
                          {providedDraggable.placeholder}
                        </>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="appletPage">
          {(providedDroppable2: DroppableProvided, snapshotDroppable2: DroppableStateSnapshot) => (
            <div
              ref={providedDroppable2.innerRef}
              style={getListStyle(snapshotDroppable2.isDraggingOver)}
            >
              {appletPageList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(
                    providedDraggable2: DraggableProvided,
                    snapshotDraggable2: DraggableStateSnapshot,
                  ) => (
                    <div>
                      <div
                        ref={providedDraggable2.innerRef}
                        {...providedDraggable2.draggableProps}
                        {...providedDraggable2.dragHandleProps}
                        style={getItemStyle(
                          providedDraggable2.draggableProps.style,
                          snapshotDraggable2.isDragging,
                        )}
                      >
                        {item.content}
                      </div>
                      {providedDraggable2.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {providedDroppable2.placeholder}
            </div>
          )}
        </Droppable>
      </Flex>
    </DragDropContext>
  );
};

export default Container;
