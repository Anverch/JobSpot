import React from "react";
import LoginHeader from "./components/LoginHeader/LoginHeader";
import LoginForm from "./components/LoginForm/LoginForm";
import "./login.css";
export default function Login() {
  return (
    <>
      <div className="body" />
      <div className="grad"/>
      <LoginHeader />
      <LoginForm/>
    </>
  );
}