import React from 'react';

const SubmitButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default SubmitButton;

