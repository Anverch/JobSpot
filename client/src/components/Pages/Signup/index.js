import React, { Component } from "react";
import { Grid, Header, Message, Form, Button} from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./signup.css";

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        fullName: "",
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Please enter your full name." : "";
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
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  };

  render() {
    const { errors, formValid } = this.state;
    return (
      <Grid className="wrapper">
        <Grid.Column className="form-wrapper">
          <Header className="form-header" as="h2">
            Create an account with us!
          </Header>
          <Form onSubmit={this.handleSubmit} noValidate>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <Form.Input
                type="text"
                name="fullName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.fullName.length > 0 && (
                <span className="error">{errors.fullName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <Form.Input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <Form.Input
                type="password"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="info">
              <small>
                Password must be at least eight characters in length.
              </small>
            </div>
            <div className="submit">
              <Button className="signupBtn">Create</Button>
            </div>
            {this.state.errorCount !== null ? (
              <p className="form-status">
                Form is {formValid ? "valid ✅" : "invalid ❌"}
              </p>
            ) : (
              "Form not submitted"
            )}
          </Form>
          <Message>
            <Link to="/">
              Already a member?
            </Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
