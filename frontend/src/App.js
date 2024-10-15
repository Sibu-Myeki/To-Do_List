import React from 'react'; // Import React
import './App.css'; // Import main CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Home from './pages/home/Home'; // Import Home component
import Dashboard from './pages/dashboardPage/DashboardPage'; // Import Dashboard component
import Header from './components/header/Header'; // Import Header component
import Signup from './components/signup/Signup'; // Import Signup component

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          <Route path="/signup" element={<Signup />} /> {/* Signup route */}
          {/* Add your blogs route here if needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

