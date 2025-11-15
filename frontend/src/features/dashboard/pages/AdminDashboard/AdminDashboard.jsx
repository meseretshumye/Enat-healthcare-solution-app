import SideBar from "../../components/SideBar/SideBar";
import MainAdminDashboard from "../../components/MainAdminDashboard/MainAdminDashboard";
import { sidebarConfig } from "../../../../constants/appConfig/sidebarConfig/sidebarConfig";
import BackToTop from "../../../../shared/components/BackToTop/BackToTop";
// import ManageBlogs from "../../features/dashboard/components/ManageBlogs/ManageBlogs";

const AdminDashboard = () => {
  return (
    <>
      <SideBar sidebarConfig={sidebarConfig?.dashboardSidebar} />
      <MainAdminDashboard />
      <BackToTop />
      {/* <ManageBlogs /> */}
    </>
  );
};

export default AdminDashboard;
