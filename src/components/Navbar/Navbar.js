import React from "react";
import "./Navbar.css";
import logo from "../../assets/108-logo/108-logo.png"; // Update the path to your logo

const Navbar = () => {
  return (
    <>
      {/* Logo in the top-left corner */}
      <a href="/">
        <img src={logo} alt="108 Logo" className="logo" />
      </a>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="navbar-links">
          <li>
            <a href="/home">Take a Tour</a>
          </li>
          <li>
            <a href="/specifications">Specifications</a>
          </li>
          <li>
            <a href="/book-a-viewing">Book a Viewing</a>
          </li>
          <li>
            <a href="/apply">Apply</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
