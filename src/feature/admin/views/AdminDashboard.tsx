import Layout from "@/layout/Layout";
import ProfileRoutes from "../routes/profile.routes";

const AdminDashboard = () => {
  return (
    <Layout profileRoutes={ProfileRoutes}>
      <span>HI</span>
    </Layout>
  );
};

export default AdminDashboard;
