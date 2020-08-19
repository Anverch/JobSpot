import React from "react";
import SignupHeader from "./components/SignupHeader/SignupHeader";
import SignupForm from "./components/SignupForm/SignupForm";
import "./signup.css";
export default function Signup() {
  return (
    <>
      <SignupHeader />
      <SignupForm/>
    </>
  );
}