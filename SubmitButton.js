import React from "react";

const SubmitButton = ({ text, onClick }) => {
  return (
    <button className='submit-button' onClick={onClick}>
      {text}
    </button>
  );
};

export default SubmitButton;
