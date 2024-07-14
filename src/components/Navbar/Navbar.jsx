import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/BAD_TALKS_LOGO.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <div className="Nav_left">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className={`Nav_center ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="#whatIsAbout">BAD?</a>
        <a href="#speakrs">Speakrs</a>
        <a href="#team">Team</a>
        <a href="#About">About Us</a>
        <a href="#footer">Contact Us</a>
      </div>
      <div className="Nav_right">
        <button className="button">
          <span>Register </span>
        </button>
      </div>
      <div className="Nav_toggler" onClick={toggleNavbar}>
        &#9776;
      </div>
    </div>
  );
}

export default Navbar;
