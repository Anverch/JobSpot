import React, { Component } from "react";
import API from "../../../../utils/API";
import { Link } from "react-router-dom";
import { Button, Form, Message, Label, Grid, Header, Container } from "semantic-ui-react";
import "./styles.css";

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
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach((val) => val.length > 0 && (count = count + 1));
  return count;
};
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        name: "",
        email: "",
        password: "",
      },
      serverError: false,
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [event.target.name]: event.target.value }, () => {});
    let errors = this.state.errors;
    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Please enter your full name." : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8
            ? "Password must be at least 8 characters long!"
            : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    API.createUser(userInfo)
      .then(
        (res) => this.setState({ formValid: validateForm(this.state.errors) }),
        this.setState({ errorCount: countErrors(this.state.errors) }),
        this.setState({ name: "", email: "", password: "" })
      )
      .catch((err) => {
        this.setState({ serverError: true });
        console.error(err);
      });
  };
  render() {
    const { errors, formValid } = this.state;
    const { name, email, password } = this.state;
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
                onSubmit={this.handleSubmit} /*noValidate*/
              >
                <Label htmlFor="name" style={styles.labelStyle}>
                  Full Name
                </Label>
                <Form.Input
                  style={styles.signupFormInput}
                  fluid
                  value={name}
                  name="name"
                  onChange={this.handleChange}
                  noValidate
                  placeholder="Full Name"
                  type="text"
                  className="inputs"
                />
                {errors.name.length > 0 && (
                  <span style={styles.error}>{errors.name}</span>
                )}
                <Label htmlFor="name" style={styles.labelStyle}>
                  Email
                </Label>
                <Form.Input
                  style={styles.signupFormInput}
                  fluid
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                  placeholder="Email"
                  type="email"
                  className="inputs"
                />
                {errors.email.length > 0 && (
                  <span style={styles.error}>{errors.email}</span>
                )}
                <Label htmlFor="name" style={styles.labelStyle}>
                  Password
                </Label>
                <Form.Input
                  style={styles.signupFormInput}
                  fluid
                  value={password}
                  name="password"
                  onChange={this.handleChange}
                  noValidate
                  placeholder="Password"
                  type="password"
                  className="inputs"
                />
                {errors.password.length > 0 && (
                  <span style={styles.error}>{errors.password}</span>
                )}
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
                {this.state.errorCount !== null ? (
                  <div>Form is {formValid ? "valid ✅" : "invalid ❌"}</div>
                ) : (
                  "Form not submitted"
                )}
                {this.state.serverError && <div>Email already in use!</div>}
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
}
export default SignupForm;
