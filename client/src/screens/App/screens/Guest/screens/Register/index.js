import React from "react";
import RegisterInputBar from "./components/RegisterInputBar";
import "./style/style.css";

const Register = () => {
  return (
    <div className="register">
      <div className="register-form">
        <RegisterInputBar title="Login" />
        <RegisterInputBar title="Register" />
      </div>
    </div>
  );
};

export default Register;
