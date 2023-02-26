import React, { Fragment, useState } from 'react';
import Lists from '../Lists/Lists';
import Card from '../Card/Card';
import { mockData } from '../../mockData/mockData';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function KanbanBoard(props) {
  // state for mock data
  const [items, setItems] = useState(mockData);

  // drag end handler for dragging items to the different board
  const onDragEnd = () => {};

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Todo board */}
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
        {/* inprogress board */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <Lists title="To Do" onDragEnd={onDragEnd} name="inprogress">
              {items.inprogress.map((item, index) => (
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
        {/* done board */}
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <Lists title="To Do" onDragEnd={onDragEnd} name="done">
              {items.done.map((item, index) => (
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
      </DragDropContext>
    </Fragment>
  );
}

export default KanbanBoard;
