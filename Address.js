import React, { useState } from 'react';

const Address = ({ address, onAddressChange }) => {
  const handleChange = (field, value) => {
    onAddressChange({ ...address, [field]: value });
  };

  return (
    <div>
      <h2>Shipping Address</h2>
      <input
        type="text"
        placeholder="Name"
        value={address.name}
        onChange={e => handleChange('name', e.target.value)}
      />
      {/* Other address fields */}
    </div>
  );
};

export default Address;

