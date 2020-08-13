import React from "react";
import { Link } from "react-router-dom";
import { Form, Segment, Button, Message } from "semantic-ui-react";
import "./SignInForm.css";
import { useUserContext } from "../../utils/UserContext";

export default function SignInForm() {
  // console.log(`handleInputChange:>>`, handleInputChange);
  // console.log(`user:>>`, user);
  const { user, handleInputChange, handleSubmit } = useUserContext();


  return (
    <>
      <Form className="login">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            value={user.fullName}
            onChange={handleInputChange}
            onSubmit={handleSubmit}

            iconPosition="left"
            placeholder="E-mail Address"
            type="text"
            id="username"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            id="password"
          />
        </Segment>
        {/* <Link

          to={{
            pathname: "/home",
            data: user,
          }}
        > */}
        <Button className="signinBtn" value="Login" type="submit">
          Login
        </Button>
        {/* </Link> */}

        <Message className="signup">
          New to us?
          <Link className="signup-link" to="/index">
            Sign Up
          </Link>
        </Message>
      </Form>
    </>
  );
}
