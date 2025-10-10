import React, { useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import BmiCalculator from "../../components/BmiCalulator/BmiCalculator";
const Home = () => {
  const [showBmi, setShowBmi] = useState(false);

  const handleShowBmi = () => {
    setShowBmi(true); // Show BMI component
    // Optional: scroll to it after rendering
    setTimeout(() => {
      document
        .getElementById("bmi-calculator")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <HeroSection onClickBmi={handleShowBmi} />
      {/* Render BMI only when showBmi is true */}
      {showBmi && <BmiCalculator />}
    </>
  );
};

export default Home;
