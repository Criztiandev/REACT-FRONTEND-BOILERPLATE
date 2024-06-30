import { createBrowserRouter } from "react-router-dom";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";
import ForgotPasswordScreen from "./screen/ForgotPasswordScreen";
import RecoverAccountScreen from "./screen/RecoverAccountScreen";
import ChangePasswordScreen from "./screen/ChangePasswordScreen";
import PageNotFoundScreen from "@/modules/static/screen/PageNotFoundScreen";

const AuthRoutes = createBrowserRouter([
  { path: "*", element: <PageNotFoundScreen /> },
  { path: "/", element: <LoginScreen /> },
  { path: "/register", element: <RegisterScreen /> },
  { path: "/forgot-password", element: <ForgotPasswordScreen /> },
  { path: "/recover/code/:id", element: <RecoverAccountScreen /> },
  { path: "/recover/password/:id", element: <ChangePasswordScreen /> },
]);

export default AuthRoutes;
