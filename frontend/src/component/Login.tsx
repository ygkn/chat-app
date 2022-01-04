import { debug } from "debug";
import { VFC } from "react";

import { AuthContextType, useAuth } from "../context/authContext";

export const Login: VFC = () => {
  const { currentUser, login, logout } = useAuth();

  debug.log({ currentUser });

  return currentUser ? (
    <LoggedInUser currentUser={currentUser} logout={logout} />
  ) : (
    <SignIn login={login} />
  );
};

type LoggedInUserProps = {
  currentUser: AuthContextType["currentUser"];
  logout: AuthContextType["logout"];
};
const LoggedInUser: VFC<LoggedInUserProps> = ({ currentUser, logout }) => (
  <div>
    <p>{currentUser?.displayName}</p>
    <button onClick={logout}>logout</button>
  </div>
);

type SignInProps = {
  login: AuthContextType["logout"];
};
const SignIn: VFC<SignInProps> = ({ login }) => (
  <button onClick={login}>sign in</button>
);
