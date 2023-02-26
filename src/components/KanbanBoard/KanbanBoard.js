import React, { Fragment, useState } from 'react';
import Lists from '../Lists/Lists';
import Card from '../Card/Card';
import { mockData } from '../../mockData/mockData';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function KanbanBoard(props) {
  const [items, setItems] = useState(mockData);

  const onDragEnd = () => {};

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <Lists title="To Do" onDragEnd={onDragEnd} name="todo">
              {items.todo.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card data={item} />
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            </Lists>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <Lists
              title="In Progress"
              onDragEnd={onDragEnd}
              name="inprogress"
            />
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm" name="done">
            <Lists title="Done" onDragEnd={onDragEnd} name="done" />
          </div>
        </div>
      </DragDropContext>
    </Fragment>
  );
}

export default KanbanBoard;
