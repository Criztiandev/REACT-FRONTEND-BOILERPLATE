import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import AuthRoutes from "./feature/auth/routes";
import AdminRoutes from "./pages/admin/DashboardScreen/routes/main.routes";

const App = () => {
  const isAuthenticated = true;
  const routes = isAuthenticated ? AdminRoutes : AuthRoutes;

  return (
    <>
      <AuthProvider isAuthenticated={isAuthenticated}>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
};

export default App;
