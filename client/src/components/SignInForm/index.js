import React from "react";
import { Link } from "react-router-dom";
import { Form, Segment, Button, Message } from "semantic-ui-react";
import "./SignInForm.css";

export default function SignInForm({ handleInputChange, user }) {
  console.log(`handleInputChange:>>`, handleInputChange);
  console.log(`user:>>`, user);

  return (
    <>
      <Form className="login">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            value={user}
            onChange={handleInputChange}
            // onSubmit={handleSubmit}
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
        <Link
          to={{
            pathname: "/home",
            data: user,
          }}
        >
          <Button className="signinBtn" value="Login">
            Login
          </Button>
        </Link>
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
