import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png"; // Adjust the path if necessary

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" onClick={handleNavLinkClick}>
            <img src={logo} alt="Yucai Learning Logo" className="logo-image" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="navbar-links desktop-menu">
          <li>
            <Link to="/" onClick={handleNavLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-us" onClick={handleNavLinkClick}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/schedule" onClick={handleNavLinkClick}>
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/teaching-methodologies" onClick={handleNavLinkClick}>
              Teaching Methodologies
            </Link>
          </li>
          <li>
            <Link to="/testimonials" onClick={handleNavLinkClick}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleNavLinkClick}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <span className="hamburger-icon">&#9776;</span>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div className="mobile-menu">
          <ul className="navbar-links mobile-menu-links">
            <li>
              <Link to="/" onClick={handleNavLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" onClick={handleNavLinkClick}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/schedule" onClick={handleNavLinkClick}>
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/teaching-methodologies" onClick={handleNavLinkClick}>
                Teaching Methodologies
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={handleNavLinkClick}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleNavLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
