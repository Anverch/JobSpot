import React from "react";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import LoginForm from "./components/LoginForm/LoginForm";
import "./login.css";

export default function Login() {
  return (
    <>
      <div className="body-l" />
      <div className="grad-l"/>
      <LoginHeader />
      <LoginForm/>
    </>
  );
}