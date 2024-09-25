// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS file for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} FunTiny Tasks. All rights reserved.</p>
            <p>Follow us on social media!</p>
        </footer>
    );
};

export default Footer;
