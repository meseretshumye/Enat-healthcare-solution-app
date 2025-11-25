import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import ServiceSection from "../components/Services/ServiceSection/ServiceSection";
import NotFoundPage from "../pages/4O4/NotFoundPage";
import UsersProfile from "../components/UsersProfile/UsersProfile";
import SingleUserProfile from "../components/UsersProfile/SingleUserProfile";
import BmiCalculator from "../components/BmiCalulator/BmiCalculator";
import MainLayout from "../layouts/MainLayOut/MainLayout";
import AdminDashboard from "../features/dashboard/pages/AdminDashboard/AdminDashboard";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import SignIn from "../features/auth/pages/SignIn/SignIn";
import DashboardLayout from "../layouts/MainLayout/DashboardLayout/DashboardLayout";
import AddEmployee from "../features/dashboard/pages/AddEmployee/AddEmployee";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAuthData } from "../redux/slices/authSlice";
import { fetchOnboardingStage } from "../redux/slices/onboardingSlice";
import { fetchUserData } from "../redux/slices/userSlice";
import PreLoader from "../shared/components/PreLoader/PreLoader";
import ProtectedRoute from "../constants/ProtectedRoute/ProtectedRoute";
import { adminAndAbove, nurseAndAbove } from "../constants/appRoles/appRoles";
import Onboarding from "../features/auth/pages/Onboarding/Onboarding";

const AppRoutes = () => {
  // destructure user data from global state
  const { isAuth, isLoading, userId } = useSelector((state) => state?.auth);
  const { isOnboardingCompleted } = useSelector((state) => state?.onboarding);
  const dispatch = useDispatch();
  // Fetch user data on component mount
  useEffect(() => {
    dispatch(fetchUserAuthData());
    dispatch(fetchOnboardingStage());
  }, [dispatch]);

  useEffect(() => {
    if (userId && isOnboardingCompleted && !isLoading) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userId, isOnboardingCompleted, isLoading]);
  if (isLoading) return <PreLoader />;
  console.log("isAuth", isAuth);
  // console.log("userId", userId);
  // console.log("isOnboardingCompleted", isOnboardingCompleted);
  return (
    <>
      <Routes>
        {/* main routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            index
            element={
              isAuth ? (
                isOnboardingCompleted ? (
                  <Home />
                ) : (
                  <Navigate to="/onboarding" replace />
                )
              ) : (
                <Home />
              )
            }
          />
        </Route>
        {/* Auth and Onboarding Routes */}
        <Route element={<MainLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route
            path="/onboarding"
            element={
              isAuth && !isOnboardingCompleted ? (
                <Onboarding />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Route>
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
        </Route>
        {/* admin dashboard routes*/}
        <Route element={<DashboardLayout />}>
          {/* main admin dashboard routes*/}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={nurseAndAbove}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/sign-up"
            element={
              <ProtectedRoute roles={adminAndAbove}>
                <AddEmployee />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* 404 not found routes */}
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
