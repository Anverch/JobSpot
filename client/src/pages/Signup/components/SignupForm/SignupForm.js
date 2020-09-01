import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Message,
  Label,
  Grid,
  Header,
  Container,
} from "semantic-ui-react";
import "./styles.css";
import API from "../../../../utils/API";
import { useHistory } from "react-router-dom";

const styles = {
  signupFormContainer: {
    display: "flex",
    flexDirection: "column",
    width: 370,
    padding: "20px 20px",
    minHeight: "60%",
    borderRadius: 6,
    border: "1px solid #a929ff",
    backgroundColor: "#ff9f29",
  },
  signupHeader: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: ["Roboto Slab", "serif"],
    fontSize: 45,
    marginTop: "0.25em",
    color: "#29d4ff",
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  signupForm: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px 20px 10px 20px",
    borderRadius: 5,
    outline: "none",
    fontStyle: "italic",
  },
  error: {
    color: "red",
    fontSize: "1em",
    display: "relative",
    margin: 2,
  },
  signupFormInput: {
    width: "100%",
    border: "solid rgb(100 122 171 / 24%)",
    borderRadius: 5,
    outline: "none",
    display: "flex",
    flexWrap: "wrap",
  },
  labelStyle: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    fontWeight: "bolder",
    color: "black",
    background: "transparent",
    fontSize: 16,
    padding: 4,
    fontFamily: ["Roboto Slab", "serif"],
    fontStyle: "normal",
  },
  info: {
    paddingBottom: "0.5em",
    fontSize: 16,
    fontWeight: "bold",
  },
  createButton: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  signupBtn: {
    width: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    padding: "0.938em",
    border: "1px solid black",
    borderRadius: 4,
    backgroundColor: "#a929ff",
    color: "#29d4ff",
    fontSize: 24,
    fontFamily: ["Roboto Slab", "serif"],
  },
  messageStyle: {
    background: "transparent",
    boxShadow: "none",
    fontFamily: ["Roboto Slab", "serif"],
    width: "100%",
    textAlign: "center",
  },
  linkStyle: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    fontStyle: "italic",
  },
};

export default function SignupForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    try {
      await API.createUser(newUser);
      history.push("/");
    } catch (e) {
      console.error("Error", e);
    }
  }

  return (
    <>
      <Container fluid style={styles.signupFormContainer}>
        <Grid fluid>
          <Grid.Column className="column">
            <Header style={styles.signupHeader}>
              <div>Create an account with us!</div>
            </Header>
            <Form style={styles.signupForm} onSubmit={handleSubmit}>
              <Label htmlFor="name" style={styles.labelStyle}>
                Full Name
              </Label>
              <Form.Input
                style={styles.signupFormInput}
                fluid
                name="name"
                onChange={(e) => setName(e.target.value)}
                noValidate
                placeholder="Full Name"
                type="text"
                className="inputs"
              />
              <Label htmlFor="name" style={styles.labelStyle}>
                Email
              </Label>
              <Form.Input
                style={styles.signupFormInput}
                fluid
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                noValidate
                placeholder="Email"
                type="email"
                className="inputs"
              />
              <Label htmlFor="name" style={styles.labelStyle}>
                Password
              </Label>
              <Form.Input
                style={styles.signupFormInput}
                fluid
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                noValidate
                placeholder="Password"
                type="password"
                className="inputs"
              />
              <div style={styles.info}>
                <small>
                  Password must be at least eight characters in length.
                </small>
              </div>
              <div style={styles.createButton}>
                <Button value="Sign Up" style={styles.signupBtn}>
                  Create
                </Button>
              </div>
              <Message style={styles.messageStyle}>
                <Link style={styles.linkStyle} to="/">
                  Already a member?
                </Link>
              </Message>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
}
