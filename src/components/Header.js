import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div>
        <span className="title">Relax</span>
        <span className="name">Inn</span>
      </div>
      {/* Burger Menu Icon for Small Screens */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`burger-line ${isMenuOpen ? "open" : ""}`}></div>
      </div>
      {/* Navigation Menu */}
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a href="/" className="active">
          Home
        </a>
        <a href="/hotels">Hotels</a>
        <a href="/about">About Us</a>
        {
          true ? 
            <button>Log In</button> : 
            <button>Log Out</button>
        }
      </nav>
    </header>
  );
};

export default Header;

