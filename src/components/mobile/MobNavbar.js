import React, { useState } from "react";
import './mob-styles/mobnavbar.css';
import { Menu, X, ArrowRight } from "lucide-react";

function MobNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="mobile-nav">
      <nav className="mobnavbar">
        <div className="mobnavbar-logosection">
          <div className="mobnavbar-logo">
            <img src="logo.png" alt="ProVital Logo" />
          </div>
          <div className="title">ProVital</div>
        </div>

        <div className="mobnavbar-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        {isMobileMenuOpen && (
          <div className="mobilemenu">
            <div className="login-signup-section">
              <div className="user-type">
                <span>Doctor</span>
                <div className="auth-links">
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
              <div className="user-type">
                <span>Patients</span>
                <div className="auth-links">
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
            </div>
            <ul className="mobnavbar-links active">
              <li>Doctors <ArrowRight color='#707070' size={16} /></li>
              <li>List your practice <ArrowRight color='#707070' size={16} /></li>
              <li>For Employers <ArrowRight color='#707070' size={16} /></li>
              <li>Courses <ArrowRight color='#707070' size={16} /></li>
              <li>Books <ArrowRight color='#707070' size={16} /></li>
              <li>Speakers <ArrowRight color='#707070' size={16} /></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default MobNavbar;
