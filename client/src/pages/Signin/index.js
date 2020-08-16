import React, { useState, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./signin.css";
import SignInForm from "../../components/SignInForm";
import API from "../../utils/API";

export default function SignIn() {
  const [user, setUser] = useState("");

  // useEffect(() => {
  //   if(!user) {
  //     return;
  //   }

  //   API.getUser
  // })

  const handleInputChange = (event) => setUser(event.target.value);

  return (
    <>
      <SignInForm handleInputChange={handleInputChange} user={user} />
    </>
     
  );
}
