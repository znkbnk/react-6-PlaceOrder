import React, { useState } from 'react';

const Payments = ({ paymentMethods, selectedMethod, onMethodSelect }) => {
  return (
    <div>
      <h2>Select Payment Method</h2>
      <ul>
        {paymentMethods.map(method => (
          <li key={method.id}>
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => onMethodSelect(method.id)}
            />
            {method.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;

