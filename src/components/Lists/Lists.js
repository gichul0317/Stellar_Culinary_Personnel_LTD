import React from 'react';

function Lists(props) {
  return (
    <div className="card mb-4 rounded-3 shadow-sm">
      <div className="card-header py-3">
        <h3>{props.title}</h3>
      </div>
      <div className="card-body" style={{ minHeight: '700px' }}></div>
    </div>
  );
}

export default Lists;
