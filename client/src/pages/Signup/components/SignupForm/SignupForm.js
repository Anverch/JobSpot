import React, { Component } from "react";
import API from "../../utils/API";

import { Button, Form, Message } from 'semantic-ui-react';
import "./styles.css";

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
                name: "",
                email: "",
                password: "",
            }
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [event.target.name]: event.target.value }, () => {
        })
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
            password: this.state.password
        }
        API.createUser(userInfo)
            .then(res =>
                this.setState({ formValid: validateForm(this.state.errors) }),
                this.setState({ errorCount: countErrors(this.state.errors) }),
                this.setState({ name: "", email: "", password: "" })
            )
            .catch(err => console.log(err))
    };

    render() {
        const { errors, formValid } = this.state;
        const { name, email, password } = this.state;

        return (
            <>
                <Form onSubmit={this.handleSubmit} noValidate>
                    <div id="signup-name">
                        <label htmlFor="name">Full Name</label>
                        <Form.Input
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            // noValidate
                            type="text"
                            id="input-name"
                        />
                        {errors.name.length > 0 && (
                            <span id="error">{errors.name}</span>
                        )}
                    </div>
                    <div id="signup-email">
                        <label htmlFor="email">Email</label>
                        <Form.Input
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            noValidate
                            type="email"
                            id="input-newEmail"
                        />
                        {errors.email.length > 0 && (
                            <span id="error">{errors.email}</span>
                        )}
                    </div>
                    <div id="signup-password">
                        <label htmlFor="signup-password">Password</label>
                        <Form.Input id="input-newPassword"
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            noValidate
                        />
                        {errors.password.length > 0 && (
                            <span id="error">{errors.password}</span>
                        )}
                    </div>
                    <div id="info">
                        <small>
                            Password must be at least eight characters in length.
                        </small>
                    </div>
                    <div id="submit">
                        <Button id="signupBtn">Create</Button>
                    </div>
                    {this.state.errorCount !== null ?
                        (
                        <p id="form-status">
                            Form is {formValid ? "valid ✅" : "invalid ❌"}
                        </p>
                        ) : (
                            "Form not submitted"
                        )
                    }
                    <Message id="member-message">
                        <Link id="login-link" to="/">
                            Already a member?
                        </Link>
                    </Message>

                </Form>
            </>
        );
    }
}

export default Register;
