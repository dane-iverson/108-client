import React from "react";
import "./Specifications.css";
import Navbar from "../../components/Navbar/Navbar";

const Specifications = () => {
  return (
    <>
      <Navbar />
      <div className="specifications-container">
        <h1 className="specifications-title">House Specifications</h1>
        <div className="specifications-content">
          {/* General Information Section */}
          <section className="spec-section">
            <h2 className="section-title">General Information</h2>
            <ul className="spec-list">
              <li>
                <span className="spec-key">Address:</span> [Enter Address]
              </li>
              <li>
                <span className="spec-key">Price:</span> [Enter Price]
              </li>
              <li>
                <span className="spec-key">Square Footage:</span> [Enter Size]
              </li>
              <li>
                <span className="spec-key">Bedrooms:</span> [Enter Number]
              </li>
              <li>
                <span className="spec-key">Bathrooms:</span> [Enter Number]
              </li>
            </ul>
          </section>

          {/* Interior Features Section */}
          <section className="spec-section">
            <h2 className="section-title">Interior Features</h2>
            <ul className="spec-list">
              <li>
                <span className="spec-key">Kitchen:</span> [Enter Details]
              </li>
              <li>
                <span className="spec-key">Living Room:</span> [Enter Details]
              </li>
              <li>
                <span className="spec-key">Flooring:</span> [Enter Type]
              </li>
              <li>
                <span className="spec-key">Heating/Cooling:</span> [Enter Type]
              </li>
            </ul>
          </section>

          {/* Exterior Features Section */}
          <section className="spec-section">
            <h2 className="section-title">Exterior Features</h2>
            <ul className="spec-list">
              <li>
                <span className="spec-key">Garage:</span> [Enter Details]
              </li>
              <li>
                <span className="spec-key">Yard:</span> [Enter Size/Details]
              </li>
              <li>
                <span className="spec-key">Patio:</span> [Enter Details]
              </li>
              <li>
                <span className="spec-key">Roofing:</span> [Enter Type]
              </li>
            </ul>
          </section>

          {/* Additional Amenities Section */}
          <section className="spec-section">
            <h2 className="section-title">Additional Amenities</h2>
            <ul className="spec-list">
              <li>
                <span className="spec-key">Swimming Pool:</span> [Yes/No]
              </li>
              <li>
                <span className="spec-key">Gym:</span> [Yes/No]
              </li>
              <li>
                <span className="spec-key">Security System:</span> [Yes/No]
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Specifications;
