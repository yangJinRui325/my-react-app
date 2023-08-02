import React from 'react';
import type {
  DroppableProvided,
  DroppableStateSnapshot,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import type { IItem } from '../typings/drag-type';

const grid: number = 8;

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 300,
  minHeight: 400,
});

const getItemStyle = (draggableStyle: any, isDragging: boolean) => ({
  userSelect: 'none',
  padding: 2 * grid,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle,
});

const items: IItem[] = [
  {
    id: '1',
    content: 'item1',
  },
  {
    id: '2',
    content: 'item2',
  },
  {
    id: '3',
    content: 'item3',
  },
  {
    id: '4',
    content: 'item4',
  },
];

const SideLeftBar: React.FC = () => {
  return (
    <Droppable droppableId="droppable">
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {items.map((item, index) => {
            <p key={item.id}>{item.content}</p>;

            // <Draggable key={item.id} draggableId={item.id} index={index}>
            //   {(
            //     providedDraggable: DraggableProvided,
            //     snapshotDraggable: DraggableStateSnapshot,
            //   ) => (
            //     <div>
            //       <div
            //         ref={providedDraggable.innerRef}
            //         {...providedDraggable.draggableProps}
            //         {...providedDraggable.dragHandleProps}
            //         style={getItemStyle(
            //           providedDraggable.draggableProps.style,
            //           snapshotDraggable.isDragging,
            //         )}
            //       >
            //         {item.content}
            //       </div>
            //       {/* {providedDraggable.placeholder} */}
            //     </div>
            //   )}
            // </Draggable>;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SideLeftBar;
