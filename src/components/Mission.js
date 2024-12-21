import React from "react";
import "./../styles/Mission.css"; // Ensure to add custom styles

const Mission = () => {
  return (
    <div className="mission-section">
      <div className="mission-content">
        <div className="text">
          <h3>Our Mission</h3>
          <p>We are committed to providing high-quality pharmaceutical products that improve the well-being of people worldwide.</p>
        </div>
        <div className="image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBVHKUlJbJ_i8rrWpUorxgTdxLNeybE9k_CQ&s" alt="Mission Image" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
