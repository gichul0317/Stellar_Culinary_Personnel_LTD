import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
function App() {
  return (
    <Fragment>
      <main className="container pt-5">
        <h1 style={{ textAlign: 'center' }}>ToDo Kanban Board</h1>
        <div className="row rows-cols-1 rows-cols-md-3 text-center pt-5">
          <KanbanBoard />
        </div>
      </main>
      <footer className="text-center pt-3">
        <p>
          Developed by{' '}
          <b>
            <a href="https://gichul-j.com/" target="_blank" rel="noreferrer">
              Gichul Jaun
            </a>
          </b>
        </p>
      </footer>
    </Fragment>
  );
}

export default App;
