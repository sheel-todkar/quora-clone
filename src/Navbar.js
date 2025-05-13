import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h2>Quora</h2>
      <input type="text" placeholder="Search Quora..." />
      <div className="nav-links">
        <span>Home</span>
        <span>Answer</span>
        <span>Spaces</span>
        <span>Notifications</span>
      </div>
    </div>
  );
}

export default Navbar;
