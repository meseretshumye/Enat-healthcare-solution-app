import React from 'react'
import Header from '../../components/Headers/Header/Header'
import HeroSection from '../../components/HeroSection/HeroSection';
import Footer from '../../components/Footer/Footer';
import AboutUs from '../../components/AboutUs/AboutUs';
import HotLine from '../../components/HotLine/HotLine';
import ServicesSection from '../../components/Services/ServiceSection/ServiceSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <HotLine />
      <ServicesSection/>
      <Footer />
    </>
  );
}

export default Home
