import React, { useState, useCallback } from "react";
import { Grid, Header } from "semantic-ui-react";
import "./signin.css";
import API, { setHeader } from "../../utils/API";
import { useUserContext } from "../../utils/GlobalState";
import { Link, useHistory } from "react-router-dom";
import { Form, Segment, Button, Message } from "semantic-ui-react";

export default function SignIn() {
  const [state, dispatch] = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    };
    try {
      const user = await API.login(userInfo);
      setHeader(JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
      console.log(user, "dbgjfdjdf");
      dispatch({ type: "login", user });
      history.push("/home");
    } catch (e) {
      console.log("Error", e);
    }
  }

  return (
    <Grid id="styleGrid">
      <div className="body" />
      <div className="grad" />
      <Header id="title-header" as="h2">
        <div>
          Job<span>Spot</span>
        </div>
      </Header>
      <Grid.Column id="colStyle">
        <Form id="login" onSubmit={handleSubmit}>
          <Form.Input
            fluid
            icon="user"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            type="password"
            id="input-password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
      </Grid.Column>
    </Grid>
  );
}
