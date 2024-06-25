import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import AuthRoutes from "./feature/auth/routes";

const App = () => {
  const routes = AuthRoutes;

  return (
    <>
      <AuthProvider isAuthenticated={true}>
        <RouterProvider router={routes} />
      </AuthProvider>
    </>
  );
};

export default App;
