import React, { Component } from "react";
import API from "../../../../utils/API";
import { Link } from "react-router-dom";

import { Button, Form, Message, Label, Grid, Header } from 'semantic-ui-react';
import "./styles.css";
// import { SignupHeader } from "../SignupHeader/SignupHeader";
const styles = {
    gridStyle: {
        position: "absolute",
        top: -20,
        left: -20,
        right: -40,
        bottom: -40,
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: "url(https://www.freedomleaf.com/wp-content/uploads/2017/04/KansasCityHeader-672x353.png)",
        // backgroundSize: "cover"
    },
    formWrapper: {
        display: "flex",
        flexDirection: "column",
        // textAlign: "center",
        width: 370,
        padding: "20px 20px",
        borderRadius: 6,
        // boxShadow: "0px 8px 36px #222",
        backgroundColor: "rgb(202 190 190)"
    },
    // formStyle: {
    //     width: "100%",
    //     display: "flex",
    //     flexWrap: "wrap"
    // },
    signupHeader: {
        display: "flex",
        // flex: "column",
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "Times New Roman",
        fontSize: 45,
        marginTop: "0.25em",
        color: "#a333c8",
        textShadow: "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"

    },
    signupForm: {
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        padding: "10px 20px 0px 20px",
        // border: "1px solid",
        borderRadius: 5,
        outline: "none",
        fontStyle: "italic"

        // flexDirection: "column",
        // width: "100%",
        // paddingTop: 20,
        // paddingRight: 40,
        // paddingBottom: 40,
        // paddingLeft: 20,
        // borderRadius: 6,
        // backgroundColor: "white"
    },
    signupFormInput: {
        width: "100%",
        border: "solid #5c177d45",
        borderRadius: 5,
        outline: "none",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
    },
    // inputPlaceholder: {
    //     fontSize: "1.2em",
    //     fontWeight: "lighter",
    //     color: "#bbb"
    // },
    info: {
        paddingBottom: "0.5em"
    },
    signupBtn: {
        width: "100%",
        cursor: "pointer",
        marginRight: "0.25em",
        marginTop: "0.5em",
        padding: "0.938em",
        border: "none",
        borderRadius: 4,
        backgroundColor: "#22223b",
        color: "white",
        fontSize: 20,
        fontFamily: "Times New Roman"
    },
    error: {
        color: "red",
        fontSize: "1em",
        display: "relative",
        margin: 2
    },
    linkStyle: {
        justifyContent: "center"
    },
    labelStyle: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        fontWeight: "bold",
        color: "black",
        background: "transparent",
        fontSize: 16,
        padding: 1,
        fontFamily: "Times New Roman"
    },
    createButton: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap"
    },
    messageStyle: {
        background: "transparent",
        boxShadow: "none",
        fontFamily: "Times New Roman",
        borderRadius: 2,
        margin: "0%",
        justifyContent: "center"
    },
    linkStyle: {
        fontSize: 18,
        padding: "0%",
        width: 330,
        fontFamily: "Times New Roman",
        color: "teal",
        fontWeight: "bold",
        textDecorationStyle: "underline",
        fontStyle: "italic",
        justifyContent: "center"
    }
}



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
                <Grid className="backgroundImg" style={styles.gridStyle}>
                    <Grid.Column className="column" style={styles.formWrapper}>
                        <Header style={styles.signupHeader}>
                            <div>
                                Create an account with us!
                            </div>
                        </Header>
                        <Form style={styles.signupForm} onSubmit={this.handleSubmit} /*noValidate*/>
                            <Label htmlFor="name" style={styles.labelStyle}>Full Name</Label>
                            <Form.Input style={styles.signupFormInput}
                                fluid
                                value={name}
                                name="name"
                                onChange={this.handleChange}
                                // noValidate
                                // placeholder="Full Name"
                                type="text"
                                className="inputs"
                            />
                            {errors.name.length > 0 && (
                                <span style={styles.error}>{errors.name}</span>
                            )}
                            <Label htmlFor="name" style={styles.labelStyle}>Email</Label>
                            <Form.Input style={styles.signupFormInput}
                                fluid
                                value={email}
                                name="email"
                                onChange={this.handleChange}
                                //noValidate
                                // placeholder="Email"
                                type="email"
                                className="inputs"
                            />
                            {errors.email.length > 0 && (
                                <span style={styles.error}>{errors.email}</span>
                            )}
                            <Label htmlFor="name" style={styles.labelStyle}>Password</Label>
                            <Form.Input style={styles.signupFormInput}
                                fluid
                                value={password}
                                name="password"
                                onChange={this.handleChange}
                                // noValidate
                                // placeholder="Password"
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
                                <Button value="Sign Up" style={styles.signupBtn}>Create</Button>
                            </div>
                            {this.state.errorCount !== null ?
                                (
                                    <div>
                                        Form is {formValid ? "valid ✅" : "invalid ❌"}
                                    </div>
                                ) : (
                                    "Form not submitted"
                                )
                            }
                            <Message style={styles.messageStyle}>
                                <Link style={styles.linkStyle} to="/">
                                    Already a member?
                                </Link>
                            </Message>
                        </Form>

                    </Grid.Column>

                </Grid>
            </>
        );
    }
}

export default SignupForm;