import React from "react";
import useAuth from "../../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleSignIn = () => {
    googleLogin();
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn btn-primary">
      Login With Google
    </button>
  );
};

export default GoogleLogin;
