import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message, Label, Grid, Header, Container } from "semantic-ui-react";
import "./styles.css";
import API from "../../../../utils/API";
import { useUserContext } from "../../../../utils/UserContext";
import { useHistory } from "react-router-dom";

const styles = {
  signupFormContainer: {
    background: "#0D0D0D"

  },
  grid: {
    justifyContent: "center"
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    width: 370,
    padding: "20px 20px",
    borderRadius: 6,
    border: "1px solid black",
    backgroundColor: "#D96704",
  },
  signupHeader: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontFamily: "Times New Roman",
    fontSize: 45,
    marginTop: "0.25em",
    color: "black",
  },
  signupForm: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
    padding: "10px 20px 0px 20px",
    borderRadius: 5,
    outline: "none",
    fontStyle: "italic"
  },
  signupFormInput: {
    width: "100%",
    border: "solid rgb(100 122 171 / 24%)",
    borderRadius: 5,
    outline: "none",
    display: "flex",
    flexWrap: "wrap",
  },
  info: {
    paddingBottom: "0.5em",
    fontSize: 16,
    fontWeight: "bold",
  },
  signupBtn: {
    width: "100%",
    cursor: "pointer",
    marginRight: "0.25em",
    marginTop: "0.5em",
    padding: "0.938em",
    border: "1px solid black",
    borderRadius: 4,
    backgroundColor: "#8C4820",
    color: "black",
    fontSize: 20,
    fontFamily: "Times New Roman",
  },
  error: {
    color: "red",
    fontSize: "1em",
    display: "relative",
    margin: 2,
  },
  labelStyle: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    fontWeight: "bolder",
    color: "black",
    background: "transparent",
    fontSize: 16,
    padding: 1,
    fontFamily: "Times New Roman",
    fontStyle: "normal",
  },
  createButton: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  messageStyle: {
    background: "transparent",
    boxShadow: "none",
    fontFamily: "Times New Roman",
    borderRadius: 2,
    margin: "0%",
    justifyContent: "center",
  },
  linkStyle: {
    fontSize: 18,
    padding: "0%",
    width: 330,
    fontFamily: "Times New Roman",
    color: "black",
    fontWeight: "bold",
    textDecorationStyle: "underline",
    fontStyle: "italic",
    justifyContent: "center",
  },
};

export default function SignupForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { user, setUser } = useUserContext();

  async function handleSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: name,
      email: email,
      password: password
    }
    try {
    await API.createUser(newUser); 
      history.push("/")
    } catch (e) {
      console.error("Error", e);
    }
   
  };

  return (
    <>
      <Container fluid style={styles.signupFormContainer}>
        <Grid fluid style={styles.grid}>
          <Grid.Column className="column" style={styles.formWrapper}>
            <Header style={styles.signupHeader}>
              <div>Create an account with us!</div>
            </Header>
            <Form
              style={styles.signupForm}
              onSubmit={handleSubmit}
            >
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

  )
}
