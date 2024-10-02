// src/SubmitButton.js
import React from 'react';
import './SubmitButton.css'; // Importing CSS file for styling

const SubmitButton = ({ onClick, href }) => {
  if (href) {
    return (
      <a href={href} className="submit-button" onClick={onClick}>
        Submit
      </a>
    );
  }

  return (
    <button className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
