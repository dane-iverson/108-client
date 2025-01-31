import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SubmissionStatus.css"; // Add styles if needed

const SubmissionStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { success } = location.state || {}; // Get success status from Apply.js

  return (
    <div className="submission-status">
      {success ? (
        <h2>✅ Application Sent Successfully!</h2>
      ) : (
        <h2>❌ Failed to Send Application.</h2>
      )}
      <p>{success ? "Thank you for applying!" : "Please try again later."}</p>
      <button onClick={() => navigate("/apply")}>Go Back</button>
    </div>
  );
};

export default SubmissionStatus;
