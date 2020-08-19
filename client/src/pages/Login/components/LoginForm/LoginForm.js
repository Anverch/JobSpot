import React, { useState } from 'react';
import API from "../../../../utils/API";
import { useUserContext } from "../../../../utils/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, Form, Message } from 'semantic-ui-react';
import "./styles.css";

const styles = {
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
        border: 1,
        borderRadius: 2,
        color: "black",
        fontFamily: "Times New Roman",
        fontSize: 18,
        fontWeight: 400,
        padding: 4,
    },
    
    buttonStyle: {
        width: "100%",
        height: 35,
        background: "black",
        border: 1,
        cursor: "pointer",
        borderRadius: 2,
        color: "#a18d6c",
        fontFamily: "Exo",
        fontSize: 18,
        fontWeight: 500,
        padding: 6,
        marginTop: 10
    },
    messageStyle: {
        width: "100%",
        fontFamily: "Exo",
        fontSize: 18,
        padding: 10,
        textAlign: "center",
        color: "white",
        backgroundColor: "transparent"
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
            <Form style={styles.loginForm} onSubmit={handleSubmit}>
                <Form.Input style={styles.loginFormInput}
                    fluid
                    icon="user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    iconPosition="left"
                    placeholder="E-mail Address"
                    type="text"
                    className="input-username"
                />
                <Form.Input style={styles.loginFormInput}
                    fluid
                    icon="lock"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    className="input-password"
                />
                <Button style={styles.buttonStyle} value="Login" type="submit">
                    Login
                </Button>
                <Message style={styles.messageStyle}>
                    New to us? <Link to="/index">Sign up</Link>
                </Message>
            </Form>


        </>
    )
}