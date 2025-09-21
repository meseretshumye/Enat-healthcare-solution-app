import React from "react";
import logoIcon from "../../assets/icons/BMI-Icons/logo.svg"; // optional logo import

const HeroSection = ({ onClickBmi }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section-container">
        <div className="hero-content">
          {/* Optional Logo */}
          <img
            src={logoIcon}
            alt="Enat Health Care Logo"
            className="hero-logo"
          />

          <h1>
            Where Care Meets Compassion—Like a <em>Mother's Embrace.</em>
          </h1>
          <p>
            At Enat Health Care Solutions, we believe everyone deserves
            compassionate, comprehensive care. Our philosophy is simple:{" "}
            <strong>
              <em>"Where Care Meets Compassion—Like a Mother's Embrace."</em>
            </strong>{" "}
            Health is more than treatment; it’s about nurturing each person,
            just as a mother cares for her child.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="main-btn">
              Make An Appointment
            </a>

            <button className="main-btn-light" onClick={onClickBmi}>
              Calculate BMI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
