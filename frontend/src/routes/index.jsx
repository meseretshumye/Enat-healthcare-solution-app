import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import HotLine from "../components/HotLine/HotLine";
import Footer from "../components/Footer/Footer";
import Header from "../components/Headers/Header/Header";
import ServiceSection from "../components/Services/ServiceSection/ServiceSection";
import NotFoundPage from "../pages/4O4/NotFoundPage";
import UsersProfile from "../components/UsersProfile";
import SingleUserProfile from "../components/Single UserProfile";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/departments" element={<h1>Departments Page</h1>} />
        <Route path="/appointment" element={<h1>Appointment Page</h1>} />
        <Route path="/user.Profile" element={<UsersProfile />} />
        <Route path="/user.Profile/:userId" element={<SingleUserProfile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <AboutUs />
      <HotLine />
      <ServiceSection />
      <Footer />
    </>
  );
};

export default AppRoutes;
