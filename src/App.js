import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Finder from './components/Finder'

function App() {
  return (
    <Router>

      <nav style={{margin:50}}>
        <Link to="/" style={{padding: 5}}>
          Home
        </Link>
        <Link to="/about" style={{padding: 5}}>
          About
        </Link>
        <Link to="/Finder" style={{padding: 5}}>
          Finder
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Finder" element={<Finder />} />
      </Routes>
    </Router>
  );
}

export default App;