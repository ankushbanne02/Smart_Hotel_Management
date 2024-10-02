// src/App.js
import React, { useState } from 'react';
import FirstPage from './Components/FirstPage';
import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import WelcomePage from './Components/WelcomePage';

const App = () => {
  // State to manage the current view
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true); // Set the state to true on button click
  };

  return (
    <div>
      {/* Conditional rendering based on isSubmitted state */}
      {!isSubmitted ? (
        <div>
          <FirstPage title="Welcome to Hotel Eknath Patil" />
          <InputField placeholder="Enter Your Name" />
          <InputField placeholder="Enter Your Phone Number" />
          <SubmitButton onClick={handleSubmit} /> {/* Use onClick to trigger state change */}
        </div>
      ) : (
        <WelcomePage /> // Render WelcomePage if isSubmitted is true
      )}
    </div>
  );
};

export default App;
