import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "../../modules/auth/screen/LoginScreen";
import RegisterScreen from "../../modules/auth/screen/RegisterScreen";
import ForgotPasswordScreen from "../../modules/auth/screen/ForgotPasswordScreen";
import RecoverScreen from "../../modules/auth/screen/RecoverScreen";
import ChangePasswordScreen from "../../modules/auth/screen/ChangePasswordScreen";
import withProtectedRoute from "@/components/hoc/withProtectedRoute";
import PageNotFound from "../static/view/PageNotFound";

const ProtectedRecoverScreen = withProtectedRoute(<RecoverScreen />);
const ProtectedChangePasswordScreen = withProtectedRoute(
  <ChangePasswordScreen />,
);

const AuthRoutes = createBrowserRouter([
  { path: "*", element: <PageNotFound /> },
  { path: "/", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },
  { path: "/forgot-password", element: <ForgotPasswordScreen /> },
  { path: "/recover/code/:id", element: <ProtectedRecoverScreen /> },
  { path: "/recover/password/:id", element: <ProtectedChangePasswordScreen /> },
]);

export default AuthRoutes;
