// src/WelcomePage.js
import './WelcomePage.css'; // Importing CSS file for styling

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to Hotel Eknath</h1>
      <p className="welcome-message">
        We are delighted to have you here. Enjoy your stay and experience
        comfort and luxury.
      </p>
      <a href="/login" className="welcome-button">Get Started</a>
    </div>
  );
};

export default WelcomePage;
