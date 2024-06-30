import Layout from "@/layout/Layout";
import ProfileRoutes from "../../pages/admin/DashboardScreen/routes/profile.routes";
import SidebarRoutes from "../../pages/admin/DashboardScreen/routes/sidebar.routes";
import { Outlet } from "react-router-dom";

const BaseDashboardScreen = () => {
  return (
    <Layout profileRoutes={ProfileRoutes} sidebarRoute={SidebarRoutes}>
      <div className="px-1">
        <Outlet />
      </div>
    </Layout>
  );
};

export default BaseDashboardScreen;
