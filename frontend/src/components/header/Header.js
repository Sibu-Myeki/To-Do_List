import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;

