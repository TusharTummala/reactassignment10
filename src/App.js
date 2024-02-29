
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import Register from './register';
import './navbar.css';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="d-flex-center min-vh-100">
          <div className="card-custom shadow rounded-lg border-primary d-flex align-items-center justify-content-center">
            <div className="card-body text-center content">
              <div className="container">
                <div className="row">
                  <div className="col-md-8">
                    <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </div>
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
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
        >
       
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link to="/login" className="nav-item nav-link">Login</Link>
            <Link to="/register" className="nav-item nav-link">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
