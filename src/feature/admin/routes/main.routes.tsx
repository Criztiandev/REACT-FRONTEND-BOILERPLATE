import { Navigate, createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../views/AdminDashboard";

const AdminRoutes = createBrowserRouter([
  { path: "*", element: <Navigate to="/" /> },
  { path: "/", element: <AdminDashboard /> },
]);

export default AdminRoutes;
