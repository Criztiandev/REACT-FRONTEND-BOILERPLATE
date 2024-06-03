import { User } from "@/interface/user";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const AuthContext = createContext<User | null>(null);

type AuthProviderProps = PropsWithChildren & {
  isAuthenticated?: boolean;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children, isAuthenticated }: AuthProviderProps) => {
  // Uses `isAuthenticated` prop to determine whether or not to render a user
  const [user] = useState<User | null>(
    isAuthenticated ? { id: 1, isAuthenticated: true } : null
  );

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
