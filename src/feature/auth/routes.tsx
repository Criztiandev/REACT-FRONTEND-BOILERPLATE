import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./views/LoginScreen";
import RegisterScreen from "./views/RegisterScreen";
import ForgotPasswordScreen from "./views/ForgotPasswordScreen";
import RecoverScreen from "./views/RecoverScreen";
import ChangePasswordScreen from "./views/ChangePasswordScreen";
import withProtectedRoute from "@/components/hoc/withProtectedRoute";

const ProtectedRecoverScreen = withProtectedRoute(<RecoverScreen />);
const ProtectedChangePasswordScreen = withProtectedRoute(
  <ChangePasswordScreen />,
);

const AuthRoutes = createBrowserRouter([
  { path: "*", element: <div>404</div> },
  { path: "/login", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },
  { path: "/forgot-password", element: <ForgotPasswordScreen /> },
  { path: "/recover/code/:id", element: <ProtectedRecoverScreen /> },
  { path: "/recover/password/:id", element: <ProtectedChangePasswordScreen /> },
]);

export default AuthRoutes;
