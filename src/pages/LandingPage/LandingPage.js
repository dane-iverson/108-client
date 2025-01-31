import React from "react";
import "./LandingPage.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/108-logo/108-logo.png";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Logo */}
      <img src={logo} alt="108 Logo" className="logo" />

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default LandingPage;
