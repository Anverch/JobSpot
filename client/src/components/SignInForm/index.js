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
        <Segment className="login-segment" stacked>
          <Form.Input className=""
            fluid
            icon="user"
            value=''
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
