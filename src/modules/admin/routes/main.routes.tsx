import { Navigate, createBrowserRouter } from "react-router-dom";
import BaseScreen from "../../../components/base/BaseScreen";
import DashboardScreen from "../screen/DashboardScreen";
import UserPanelScreen from "../screen/UserPanelScreen";
import UserProfilePanelScreen from "../screen/UserProfilePanelScreen";

const AdminRoutes = createBrowserRouter([
  { path: "*", element: <Navigate to="/" /> },
  {
    path: "/",
    element: <BaseScreen />,
    children: [
      { path: "/", element: <DashboardScreen /> },
      { path: "/users", element: <UserPanelScreen /> },
      { path: "/users/profile/:id", element: <UserProfilePanelScreen /> },
    ],
  },
]);

export default AdminRoutes;
