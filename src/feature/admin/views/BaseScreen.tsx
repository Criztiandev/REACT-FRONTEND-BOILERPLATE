import Layout from "@/layout/Layout";
import ProfileRoutes from "../routes/profile.routes";
import SidebarRoutes from "../routes/sidebar.routes";
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
