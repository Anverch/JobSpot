import React from "react";
import { Link } from "react-router-dom";
import { Form, Segment, Button, Message, Header, Grid } from "semantic-ui-react";
// import "./SignInForm.css";
import { useUserContext } from "../../utils/GlobalState";

export default function SignInForm() {
  const [state, dispatch] = useUserContext();

  return (
    <>
      <Grid id="styleGrid">
        <div className="body" />
        <div className="grad" />
        <Grid.Column id="colStyle">
          <Header id="title-header" as="h2">
            <div>
              Job<span>Spot</span>
            </div>
          </Header>
          <Form className="login">

            <Form.Input
              fluid
              icon="user"
              value=''
              onChange={state.handleInputChange}
              onSubmit={state.handleSubmit}
              iconPosition="left"
              placeholder="E-mail Address"
              type="text"
              id="input-username"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              id="input-password"
            />

            {/* <Link

          to={{
            pathname: "/home",
            data: user,
          }}
        > */}
            <Button id="signinBtn" value="Login" type="submit">
              Login
            </Button>
            {/* </Link> */}

            <Message id="signup">
              New to us?
          <Link id="signup-link" to="/index">
                Sign Up
          </Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
