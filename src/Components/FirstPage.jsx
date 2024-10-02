// src/FirstPage.js
import React from 'react';
import './FirstPage.css'; // Importing CSS file for styling

const FirstPage = ({ title }) => {
  return (
    <h1 className="FirstPage">{title}</h1>
  );
};

export default FirstPage;
