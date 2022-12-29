import React from "react";
import { useAuth } from "./Auth";

const LoginComp = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>User Name :{user.fname} </h2>
    </div>
  );
};

export default LoginComp;