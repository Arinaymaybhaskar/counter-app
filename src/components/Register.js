import React from "react";
import {
    getAuth
  } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Register = (props) => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <button className="px-2 border-2 border-black" onClick={signInWithGoogle}>
        Sign in With Google
      </button>
    </>
  );
};

export default Register;
