// src/Components/InputField.js
import React from 'react';
import './InputField.css'; // Import CSS for styling

const InputField = ({ placeholder, onChange }) => {
  return (
    <div className="input-field-container">
      <input
        type="text"
        className="input-field"
        placeholder={placeholder}
        onChange={onChange} // Capture input value when it changes
      />
    </div>
  );
};

export default InputField;
