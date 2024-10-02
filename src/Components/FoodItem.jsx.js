// src/Components/FoodItem.js
import React from 'react';
import './FoodItem.css'; // Import the CSS file for styling

const FoodItem = ({ name, description, imageUrl }) => {
  return (
    <div className="food-item-container">
      <img
        src={imageUrl}
        alt={name}
        className="food-item-image"
      />
      <div className="food-item-details">
        <h2 className="food-item-name">{name}</h2>
        <p className="food-item-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
