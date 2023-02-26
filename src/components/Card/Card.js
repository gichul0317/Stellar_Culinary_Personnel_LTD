import React from 'react';

function Card({ data }) {
  return (
    <div style={{ cursor: 'pointer' }} className="bg-secondary ">
      <h2 className="p-3">{data.title}</h2>
    </div>
  );
}

export default Card;
