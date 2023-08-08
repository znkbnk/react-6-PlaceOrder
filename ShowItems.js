import React, { useState } from 'react';

const ShowItems = ({ items, onQuantityChange }) => {
  return (
    <div>
      <h2>Available Items</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <input
              type="number"
              min="0"
              value={item.quantity}
              onChange={e => onQuantityChange(item.id, parseInt(e.target.value))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowItems;

