import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="ProVital Logo" />
      </div>
      <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
        <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
        <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href="#practice">List your practice</a></li>
        <li><a href="#employees">For Employees</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#book">Book</a></li>
        <li><a href="#specialists">Specialists</a></li>
        <li><a href="#doctor">Doctor</a></li>
        <li><a href="#patient">Patients</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
