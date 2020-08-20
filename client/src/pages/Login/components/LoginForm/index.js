import React, { useState, useCallback } from 'react';
import API from "../../../../utils/API";
import { useUserContext } from "../../../../utils/GlobalState";
import {Link, useHistory } from "react-router-dom";
import { Button, Form, Message } from 'semantic-ui-react';
import "./styles.css";

const styles = {
    bodyStyle: {
        position: "absolute",
        top: -20,
        left: -20,
        right: -40,
        bottom: -40,
        width: "auto",
        height: "auto",
        // backgroundImage: "url(https://www.muralsyourway.com/media/catalog/product/cache/1/base/1200x/040ec09b1e35df139433887a97daa66f/k/a/kansas-city-skyline-wallpaper-mural.jpg)",
        // backgroundSize: "cover",
        // filter: "blur(5px)",
        zIndex: 0
    },
    gradStyle: {
        position: "absolute",
        top: -20,
        left: -20,
        right: -40,
        bottom: -40,
        width: "auto",
        height: "auto"        
    },
    loginForm: {
        position: "absolute",
        background: "transparent",
        top: "calc(50% - 75px)",
        left: "calc(50% - 50px)",
        height: 150,
        width: 350,
        padding: 10,
        zIndex: 2
    },
    loginFormInput: {
        border: "1px solid black",
        borderRadius: 2,
        color: "black",
        fontFamily: "Times New Roman",
        fontSize: 18,
        fontWeight: 400,
        padding: 4
    },

    buttonStyle: {
        width: "100%",
        height: 35,
        background: "teal",
        border: 1,
        cursor: "pointer",
        borderRadius: 2,
        color: "black",
        fontFamily: "Times New Roman",
        fontSize: 18,
        fontWeight: "bold",
        padding: 6,
        marginTop: 10
    },
    messageStyle: {
        width: "100%",
        fontFamily: "Times New Roman",
        fontSize: 24,
        padding: 7,
        textAlign: "center",
        color: "orange",
        backgroundColor: "transparent"
    },
    linkStyle: {
        fontSize: 24,
        color: "teal",
        fontWeight: "bold",
        textDecorationStyle: "underline",
        fontStyle: "italic"
    }
}
        




export default function LoginForm() {
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
            dispatch({ type: "login", user });
            history.push("/home");
        } catch (e) {
            console.log("Error", e);
        }
    }
    return (
        <>
            <div style={styles.bodyStyle} className="bodyImg"/>
            <div style={styles.gradStyle} className="grad-l"/>
            <Form style={styles.loginForm} className="loginForm" onSubmit={handleSubmit}>
                <Form.Input style={styles.loginFormInput}
                    fluid
                    icon="user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    iconPosition="left"
                    placeholder="E-mail Address"
                    type="text"
                    className="input-email"
                />
                <Form.Input
                    fluid
                    icon="lock"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    className="input-password"
                />
                <Button className="buttonStyle"value="Login" type="submit">
                    Login
                </Button>
                <Message className="messageStyle">
                    New to us? <Link className="linkStyle" to="/index">Sign up</Link>
                </Message>
            </Form>
        </>
    )
}

