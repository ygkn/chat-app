import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { FC, useEffect, useState } from "react";

import { logoutFireAuth, signIn } from "../lib/firebase/fireauth";
import app from "../lib/firebase/firebase";
import { AuthContext, AuthContextType } from "./authContext";

export const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    return onAuthStateChanged(auth, (user: AuthContextType["currentUser"]) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  const value: AuthContextType = {
    currentUser,
    login: signIn,
    logout: logoutFireAuth,
  };

  return (
    <AuthContext.Provider value={value}>
      {isLoading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};
