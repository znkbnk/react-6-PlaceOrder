import React from 'react';

const PlaceOrderAction = ({ onSubmit }) => {
  return (
    <div>
      <button onClick={onSubmit}>Place Order</button>
    </div>
  );
};

export default PlaceOrderAction;

