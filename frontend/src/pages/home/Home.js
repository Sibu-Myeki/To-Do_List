import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
    return (
        <div className="home">
            <header>
                <h1>FunTiny Tasks</h1>
                {/* Add navigation links here if needed */}
            </header>
            <div className="home-content">
                <div className="text-content">
                    <h2>Welcome to FunTiny Tasks! 🌟</h2>
                    <p>Your simple solution for managing tasks and staying organized. Create, track, and complete your tasks effortlessly!</p>
                    <button className="signup-button">Sign Up</button>
                </div>
                <img src="pic1.jpg" alt="Productivity" className="home-image" />
            </div>
            <footer>
                {/* Footer content here */}
            </footer>
        </div>
    );
};

export default Home;


