// src/Components/WelcomePage.js
import React, { useEffect, useState } from 'react';
import FoodItem from './FoodItem.jsx';
import './WelcomePage.css';

const WelcomePage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Fetching user name from localStorage
    const storedUserName = localStorage.getItem('userName') || 'Guest'; 
    setUserName(storedUserName);
  }, []);

  return (
    
    <div>
      <h1 className="welcome-title">Hello, {userName}  Here's Our Todays's Menu !!!!</h1>
      <div className="welcome-container">
      <FoodItem name={"VEG FOOD"}/>
      <FoodItem name={"NON-VEG FOOD"}/>
      <FoodItem name={"STRATERS"}/>
      <FoodItem name={"DESERTS"}/>
      <FoodItem name={"ICE-CREAMS"}/>
      </div>
      
    </div>
  );
};

export default WelcomePage;
