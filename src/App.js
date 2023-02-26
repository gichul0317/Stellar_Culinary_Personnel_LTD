import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import './App.css';

function App() {
  return (
    <Fragment>
      <h1 style={{ textAlign: 'center' }}>ToDo Kanban Board</h1>
      <main className="container py-3">
        <div className="row rows-cols-1 rows-cols-md-3 text-center"></div>
        <KanbanBoard />
      </main>
    </Fragment>
  );
}

export default App;
