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
            </Grid.Column>
        </Grid>
    )
}