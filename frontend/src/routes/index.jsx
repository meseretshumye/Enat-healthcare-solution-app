import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import ServiceSection from "../components/Services/ServiceSection/ServiceSection";
import NotFoundPage from "../pages/4O4/NotFoundPage";
import UsersProfile from "../components/UsersProfile/UsersProfile";
import SingleUserProfile from "../components/UsersProfile/SingleUserProfile";
import BmiCalculator from "../components/BmiCalulator/BmiCalculator";
import MainLayout from "../layouts/MainLayOut/MainLayout";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import SignIn from "../pages/Auth/SignIn/SignIn";
import DashboardLayout from "../layouts/MainLayout/DashboardLayout/DashboardLayout";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* ✅ Layout as shared parent for all nested routes */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/BmiCalculator" element={<BmiCalculator />} />
          <Route path="/Contact" element={<h1>Contact Page</h1>} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/doctors" element={<h1>Doctors Page</h1>} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/departments" element={<h1>Departments Page</h1>} />
          <Route path="/appointment" element={<h1>Appointment Page</h1>} />
          <Route path="/blogs" element={<BlogsPage />} />
          {/* ✅ Parent route */}
          <Route path="/usersProfile" element={<UsersProfile />}>
            {/* ✅ Nested route renders inside <Outlet /> */}
            <Route path=":userId" element={<SingleUserProfile />} />
          </Route>
          {/* auth routes */}
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
        {/* admin dashboard routes*/}
        <Route element={<DashboardLayout />}>
          {/* main admin dashboard routes*/}
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Route>
        {/* ✅ 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
