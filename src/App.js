


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';

function App() {
  return (
    <Router>
      {/* Create a separate navigation bar component */}
      <Navbar />

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow rounded-lg border-primary">
          {/* Add a card header with title */}
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Authentication</h5>
          </div>

          {/* Move the card content below the navbar */}
          <div className="card-body">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Add a brand name or logo */}
        <Link to="/" className="navbar-brand">Your App Name</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;


