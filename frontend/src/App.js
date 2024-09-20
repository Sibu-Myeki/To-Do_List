import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Header from '../src/components/header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
