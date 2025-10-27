import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import ServiceSection from "../components/Services/ServiceSection/ServiceSection";
import NotFoundPage from "../pages/4O4/NotFoundPage";
import UsersProfile from "../components/UsersProfile";
import SingleUserProfile from "../components/Single UserProfile";
import BmiCalculator from "../components/BmiCalulator/BmiCalculator";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* ✅ Layout as shared parent for all nested routes */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/Contact" element={<h1>Contact Page</h1>} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/doctors" element={<h1>Doctors Page</h1>} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/departments" element={<h1>Departments Page</h1>} />
          <Route path="/appointment" element={<h1>Appointment Page</h1>} />
          {/* ✅ Parent route */}
          <Route path="/usersProfile" element={<UsersProfile />}>
            {/* ✅ Nested route renders inside <Outlet /> */}
            <Route path=":userId" element={<SingleUserProfile />} />
          </Route>
          {/* ✅ 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
