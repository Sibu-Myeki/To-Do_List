import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css'; // Import your CSS file
import pic1 from '../../images/pic1.jpg'; // Ensure correct path to the image
import Footer from '../../components/footer/Footer'; // Import the Footer component

const Home = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleSignup = () => {
    navigate('/signup'); // Navigate to the Signup page
  };

  return (
    <div className="home">
      <header>
        <h1>Goal_smashing</h1>
      </header>
      <div className="home-content">
        <div className="text-content">
          <h2>Welcome to Goal_smashing! <span role="img" aria-label="Star emoji">🌟</span></h2>
          <p>Your ultimate app for breaking down big goals into manageable daily tasks. Effortlessly create, track, and achieve your goals using the power of your inner voice and thinking language!</p>
          <button className="signup-button" onClick={handleSignup}>Sign Up</button> {/* Attach the click handler */}
        </div>
        <img src={pic1} alt="Productivity" className="home-image" />
      </div>
      <Footer /> {/* Include the Footer component here */}
    </div>
  );
};

export default Home;
