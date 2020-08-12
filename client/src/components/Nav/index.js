import React from "react";
import { Header, Grid, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <Grid>
        <Grid.Row id="nav" columns={1} verticalAlign="middle">
          <Grid.Column textAlign="center">
            <Header as="h2" id="nav-logo">
              <span id="job">Job</span>
              Spot
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div class="ui secondary pointing menu">
        <Link to="/home" class="item active">
          Dashboard
        </Link>
        <Link to="/create-job" class="item">
          Add New Job
        </Link>
        <div class="right menu">
          <a class="ui item">
            Logout
          </a>
        </div>
      </div>
      <div class="ui segment">
        <p></p>
      </div>
    </>
  );
}
