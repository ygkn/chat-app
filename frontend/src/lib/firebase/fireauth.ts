import debug from "debug";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "./firebase";

export async function signIn(): Promise<void> {
  const provider = new GoogleAuthProvider();

  const auth = getAuth(app);

  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      debug.log({ credential, token, user });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const credential = GoogleAuthProvider.credentialFromError(error);
      debug.log({ errorCode, errorMessage, credential });
    });
}

export async function logoutFireAuth(): Promise<void> {
  const auth = getAuth(app);
  return signOut(auth);
}
