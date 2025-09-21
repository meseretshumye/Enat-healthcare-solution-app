import React, { useState } from "react";
import Header from "../../components/Headers/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";
import HotLine from "../../components/HotLine/HotLine";
import ServicesSection from "../../components/Services/ServiceSection/ServiceSection";
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
      <Header />
      <HeroSection onClickBmi={handleShowBmi} />
      {/* Render BMI only when showBmi is true */}
      {showBmi && <BmiCalculator />}
      <AboutUs />
      <HotLine />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
