import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage"; // Adjust paths as needed
import Home from "./pages/Home/Home";
import Specifications from "./pages/Specifications/Specifications";
import BookAViewing from "./pages/Bookings/Bookings";
import Apply from "./pages/Apply/Apply";
import SubmissionStatus from "./pages/Apply/SubmissionStatus";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/specifications" element={<Specifications />} />
        <Route path="/book-a-viewing" element={<BookAViewing />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/submission-status" element={<SubmissionStatus />} />
      </Routes>
    </Router>
  );
};

export default App;
