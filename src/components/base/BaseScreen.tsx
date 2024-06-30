import Layout from "@/modules/shared/layout/Layout";
import ProfileRoutes from "../../modules/admin/routes/profile.routes";
import SidebarRoutes from "../../modules/admin/routes/sidebar.routes";
import { Outlet } from "react-router-dom";

const BaseScreen = () => {
  return (
    <Layout profileRoutes={ProfileRoutes} sidebarRoute={SidebarRoutes}>
      <div className="px-1">
        <Outlet />
      </div>
    </Layout>
  );
};

export default BaseScreen;
