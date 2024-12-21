import React from "react";
import "./../styles/About.css";
import Mission from "./Mission";  // Import Mission Component
import Vision from "./Vision";    // Import Vision Component

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Us</h2>
        <p>At AKO Life Sciences, we are committed to improving lives by delivering innovative and accessible pharmaceutical solutions. With a strong foundation in research and development, we aim to address the world's most pressing healthcare challenges.</p>
        <Vision />  {/* Vision Section */}
        <Mission />  {/* Mission Section */}
      </div>
    </section>
  );
};

export default About;
