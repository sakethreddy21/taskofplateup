import React, { useState } from "react";
import "./desk-styles/Navbar.css";
import { ChevronRight } from "lucide-react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [isChevronOpen, setChevronOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to check if the screen is mobile
  

  const toggleChevronIcon = () => {
    setChevronOpen(!isChevronOpen);
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
 

  return (
    <nav className="navbar">
      <div className="navbar-logosection">
        <div className="navbar-logo">
          <img src="logo.png" alt="ProVital Logo" />
        </div>
        <div className="title">ProVital</div>
      </div>

      <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
        <span className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}></span>
        <span className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}></span>
      </div>

     
      
        <ul className="navbar-links">
          <li>
            <a href="#practice">List your practice</a>
           
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#employees">For Employers</a>
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#courses">Courses</a>
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#book">Books</a>
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#specialists">Specialists</a>
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#doctor">Doctors</a>
          </li>
          <span className="divider">|</span>

          <li>
            <a href="#login">Login / SignUp</a>
            <div onClick={toggleChevronIcon}>
              <ChevronRight
                size={18}
                className={`chevron ${isChevronOpen ? "rotate" : ""}`}
              />
            </div>
            {isDropdownOpen && (
              <div className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <div className="dropdown-item">
                  <span className="profile">Doctor</span>
                  <span>
                    <a href="#doctor-login"> Login</a>{" "}
                    <a href="#doctor-signup">Signup</a>
                  </span>
                </div>
                <div className="divider"></div>
                <div className="dropdown-item">
                  <span className="profile">Patient</span>
                  <span>
                    <a href="#patient-login"> Login</a>{" "}
                    <a href="#patient-signup">Signup</a>
                  </span>
                </div>
              </div>
            )}
          </li>
        </ul>
      
    </nav>
  );
}

export default Navbar;
