import React, { Fragment, useState } from 'react';
import Lists from '../Lists/Lists';
import Card from '../Card/Card';
import { mockData } from '../../mockData/mockData';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function KanbanBoard(props) {
  const [items, setItems] = useState(mockData);

  const removeListHandler = (list, index) => {
    const newList = [...list];
    const [removed] = newList.splice(index, 1);
    return [removed, newList];
  };

  const addListHandler = (list, index, element) => {
    const newList = [...list];
    newList.splice(index, 0, element);
    return newList;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      alert('Please drag and drop in the appropriate area!');
      return;
    }

    const listCopy = { ...items };
    const sourceList = listCopy[result.source.droppableId];

    //removedElement => dragged out element
    //newSourceList => array list of the dropped area (todo, in progress or done)
    const [removedElement, newSourceList] = removeListHandler(
      sourceList,
      result.source.index
    );

    // change orders within the listcopy array
    listCopy[result.source.droppableId] = newSourceList;

    // add to destination list
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addListHandler(
      destinationList,
      result.destination.index,
      removedElement
    );

    // update state
    setItems(listCopy);
  };

  return (
    <Fragment>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Todo board */}
        <div className="col p-1">
          <div className="card rounded-3 shadow-sm">
            <Lists title="To Do" onDragEnd={onDragEnd} name="todo">
              {items.todo.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </Lists>
          </div>
        </div>
        {/* inprogress board */}
        <div className="col p-1">
          <div className="card rounded-3 shadow-sm">
            <Lists title="In Progress" onDragEnd={onDragEnd} name="inprogress">
              {items.inprogress.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
                    </div>
                  )}
                </Draggable>
              ))}
            </Lists>
          </div>
        </div>
        {/* done board */}
        <div className="col p-1">
          <div className="card rounded-3 shadow-sm">
            <Lists title="Done" onDragEnd={onDragEnd} name="done">
              {items.done.map((item, index) => (
                <Draggable
                  key={item.uuid}
                  draggableId={item.uuid}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card data={item} />
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
