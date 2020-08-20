import React from "react";
import { Link } from "react-router-dom";
import { Form, Segment, Button, Message } from "semantic-ui-react";
// import "./SignInForm.css";
import { useUserContext } from "../../utils/GlobalState";

export default function SignInForm() {
  const [state, dispatch] = useUserContext();
  return (
    <>
      <Form className="login">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            value=""
            onChange={state.handleInputChange}
            onSubmit={state.handleSubmit}
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
        <Button id="signinBtn" value="Login" type="submit">
          Login
        </Button>
        <Message id="signup">
          New to us?
          <Link id="signup-link" to="/index">
            Sign Up
          </Link>
        </Message>
      </Form>
    </>
  );
}
