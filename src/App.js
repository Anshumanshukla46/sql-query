import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Editor from './Components/Editor';

function Home() {
  const navigate = useNavigate();

  const navigateToEditor = () => {
    navigate('/editor');
  };

  return (
    <div className="container">
      <h1>SQL Query Web Application</h1>
      <button className="run-sql-button" onClick={navigateToEditor}>
        Run SQL
      </button>
      <p className="made-for">Made for <span><b><a href="https://atlan.com/">Atlan</a></b></span></p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
