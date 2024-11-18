import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // For routing
import Home from './pages/home/Home'; // Home page
import Signup from './components/signup/Signup'; // Signup page
import DashboardPage from './pages/dashboardPage/DashboardPage'; // Dashboard page
import Header from './components/header/Header'; // Import Header component
import './App.css';

function App() {
  return (
    <Router>
      {/* Display the Header (Navbar) on all pages */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/signup" element={<Signup />} />  {/* Signup page route */}
        <Route path="/dashboard" element={<DashboardPage />} />  {/* Dashboard page route */}
      </Routes>
    </Router>
  );
}

export default App;
