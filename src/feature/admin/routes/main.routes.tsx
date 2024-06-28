import { Navigate, createBrowserRouter } from "react-router-dom";
import BaseScreen from "../views/BaseScreen";
import DasboardScreen from "../views/DasboardScreen";
import UserScreen from "../views/UserScreen";

const AdminRoutes = createBrowserRouter([
  { path: "*", element: <Navigate to="/" /> },
  {
    path: "/",
    element: <BaseScreen />,
    children: [
      { path: "/", element: <DasboardScreen /> },
      { path: "/users", element: <UserScreen /> },
    ],
  },
]);

export default AdminRoutes;
