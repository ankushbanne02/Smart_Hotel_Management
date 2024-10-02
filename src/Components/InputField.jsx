// src/InputField.js
import React from 'react';
import './InputField.css'; // Importing CSS file for styling

const InputField = ({ label, type, value, onChange, placeholder, required }) => {
  return (
    <div className="input-field-container">
      <label className="input-label">{label}</label>
      <input 
        className="input" 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} 
        required={required} 
        
      />
    </div>
  );
};

export default InputField;
