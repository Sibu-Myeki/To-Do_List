import React from 'react'; // Import React
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'; // Corrected import
import Dashboard from './pages/dashboardPage/DashboardPage'; // Corrected import
import Header from './components/header/Header';
import Signup from './components/signup/Signup'; // Import the Signup component

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} /> {/* Add route for Signup */}
          {/* Add your blogs route here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
