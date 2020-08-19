import React, { Component } from "react";
import API from "../../../../utils/API";
import { Link } from "react-router-dom";

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
                <Form className="signupForm"onSubmit={this.handleSubmit} /*noValidate*/>
                    <Form.Input
                        fluid
                        value={name}
                        name="name"
                        onChange={this.handleChange}
                        // noValidate
                        placeholder="Full Name"
                        type="text"
                        className="input-name"
                    />
                    {errors.name.length > 0 && (
                        <span id="error">{errors.name}</span>
                    )}
                    <Form.Input
                        fluid
                        value={email}
                        name="email"
                        onChange={this.handleChange}
                        //noValidate
                        placeholder="Email"
                        type="email"
                        className="input-newEmail"
                    />
                    {errors.email.length > 0 && (
                        <span id="error">{errors.email}</span>
                    )}
                    <Form.Input
                        fluid
                        value={password}
                        name="password"
                        onChange={this.handleChange}
                        // noValidate
                        placeholder="Password"
                        type="password"
                        className="input-newPassword"
                    />
                    {errors.password.length > 0 && (
                        <span id="error">{errors.password}</span>
                    )}
                    <div id="info">
                        <small>
                            Password must be at least eight characters in length.
                        </small>
                    </div>
                    
                    <div id="submit">
                        <Button value="Sign Up" id="signupBtn">Create</Button>
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
                    <Message>
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
