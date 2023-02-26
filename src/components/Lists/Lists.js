import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

function Lists({ title, name, children }) {
  return (
    <>
      <div className="card-header py-3">
        <h3>{title}</h3>
      </div>
      <div className="card-body" style={{ minHeight: '700px' }}>
        <Droppable droppableId={name}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              {children}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </>
  );
}

export default Lists;
