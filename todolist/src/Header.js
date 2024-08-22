import React from 'react';
import './Header.css'; // If you have custom styles

const Header = () => {
  return (
    <header className="header">
      <h1>My Todo App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
