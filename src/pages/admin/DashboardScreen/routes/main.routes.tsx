import { Navigate, createBrowserRouter } from "react-router-dom";
import BaseScreen from "../../../../components/base/BaseDashboardScreen";
import DasboardScreen from "..";
import UserScreen from "../../UserScreen";
import UserDetailScreen from "../../UserDetailScreen";

const AdminRoutes = createBrowserRouter([
  { path: "*", element: <Navigate to="/" /> },
  {
    path: "/",
    element: <BaseScreen />,
    children: [
      { path: "/", element: <DasboardScreen /> },
      { path: "/users", element: <UserScreen /> },
      { path: "/users/profile/:id", element: <UserDetailScreen /> },
    ],
  },
]);

export default AdminRoutes;
