import React from 'react';

function Card({ data }) {
  return (
    <div style={{ cursor: 'move' }} className="bg-secondary rounded-sm">
      <h2 className="p-4">{data.title}</h2>
    </div>
  );
}

export default Card;
