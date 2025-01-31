import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import emailjs from "emailjs-com";
import "./Apply.css";
import Navbar from "../../components/Navbar/Navbar";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    leasePeriod: "",
    message: "",
  });

  const navigate = useNavigate(); // Use navigate for redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Navigate to loading page first
    navigate("/submission-status", { state: { success: "loading" } });

    emailjs
      .send(
        "service_0bktqy4", // Replace with your EmailJS Service ID
        "template_u4mxsda", // Replace with your EmailJS Template ID
        formData,
        "RUQrjDez32VcHpEHQ" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          // Navigate to success page
          navigate("/submission-status", { state: { success: true } });
        },
        () => {
          // Navigate to error page
          navigate("/submission-status", { state: { success: false } });
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="apply-container">
        <h2>Apply for the Household</h2>
        <form onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Surname:</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label>Lease Period:</label>
          <input
            type="text"
            name="leasePeriod"
            value={formData.leasePeriod}
            onChange={handleChange}
            required
          />

          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </>
  );
};

export default Apply;
