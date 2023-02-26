import React, { Fragment, useState } from 'react';
import Lists from '../Lists/Lists';
import { mockData } from '../../mockData/mockData';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

function KanbanBoard(props) {
  const [items, setItems] = useState(mockData);

  return (
    <Fragment>
      <div className="col">
        <Lists />
      </div>
    </Fragment>
  );
}

export default KanbanBoard;
