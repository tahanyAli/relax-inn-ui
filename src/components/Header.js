import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      
      <div>
        <span className="title">Relax</span>
        <span className="name">Inn</span>
      </div>
      <nav>
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
