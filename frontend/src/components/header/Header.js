import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/Logo.png';  // Corrected path to the logo image

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" /> {/* Logo image */}
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blogs" className="nav-link">Blogs</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;

