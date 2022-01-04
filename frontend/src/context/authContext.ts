import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export type AuthContextType = {
  currentUser: User | null;
  login?: () => Promise<void>;
  logout?: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
});

export const useAuth = () => {
  return useContext(AuthContext);
};
