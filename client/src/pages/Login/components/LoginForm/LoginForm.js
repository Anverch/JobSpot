import React, { useState } from 'react';
import API from "../../../../utils/API";
import { useUserContext } from "../../../../utils/GlobalState";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react';
import "./styles.css";

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
            <Form onSubmit={handleSubmit}>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    id="input-password"
                />
                <Button value="Login" type="submit">
                    Login
                </Button>
                <Message>
                    New to us? <Link to="/index">Sign up</Link>
                </Message>
            </Form>


        </>
    )
}