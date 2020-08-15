import React, { useState, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./signin.css";
// import SignInForm from "../../components/SignInForm";
import API from "../../utils/API";

import { Link, useHistory } from "react-router-dom";
import { Form, Segment, Button, Message } from "semantic-ui-react";

export default function SignIn() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      email: email,
      password: password
    }
    console.log(userInfo)
    try {
      await API.login(userInfo)
    history.push("/home")
    } catch (e) {
      console.log("Error", e)
    }
  }

  return (
    <Grid className="styleGrid">
      <div className="body" />
      <div className="grad" />
      <Grid.Column className="colStyle">
        <Header className="title-header" as="h2">
          <div>
            Job<span>Spot</span>
          </div>
        </Header>
        <Form className="login" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setPassword(e.target.value)}
            />
          </Segment>
          {/* <Link
          to={{
            pathname: "/home",
            data: user,
          }}
        > */}
          <Button
            className="signinBtn"
            value="Login"
            type="submit"
          >
            Login
        </Button>
          <Message className="signup">
            New to us?
          <Link className="signup-link" to="/index">
              Sign Up
          </Link>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
