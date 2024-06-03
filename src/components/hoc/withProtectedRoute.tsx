/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withProtectedRoute = (WrappedComponent: any) => {
  return (props: any) => {
    const user = useAuth(); // Assuming useAuth returns an object with user details
    const navigate = useNavigate();

    useEffect(() => {
      if (user === null || !user.isAuthenticated) {
        navigate("/login", { replace: true });
      }
    }, [user, navigate]);

    return user && user.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : null;
  };
};

export default withProtectedRoute;
