// src/App.js
import React, { useState } from 'react';
import FirstPage from './Components/FirstPage';
import InputField from './Components/InputField';
import SubmitButton from './Components/SubmitButton';
import WelcomePage from './Components/WelcomePage';

const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  const handleInputChange = (e) => {
    setUserName(e.target.value); // Update userName state when the input changes
  };

  const handleSubmit = () => {
    localStorage.setItem('userName', userName); // Store the user's name in localStorage
    setIsSubmitted(true); // Set the state to true to navigate to WelcomePage
  };

  return (
    <div>
      {!isSubmitted ? (
        <div>
          <FirstPage title="Welcome to Hotel Eknath Patil" />
          <InputField placeholder="Enter Your Name" onChange={handleInputChange} />
          <InputField placeholder="Enter Your Phone Number" />
          <SubmitButton onClick={handleSubmit} />
        </div>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};

export default App;
