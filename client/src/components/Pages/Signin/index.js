import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
} from "semantic-ui-react";
import "./style.css";

export default function SignIn() {
    return (
        <Grid className="styleGrid">
            <div className="body" />
            <div className="grad" />
            <Grid.Column className="colStyle">
                <Header className="header" as="h2">
                    <div>
                        Job<span>Spot</span>
                    </div>
                </Header>
                <Form className="login">
                    <Segment stacked>
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail Address" type="text" />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />
                        
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    )
}