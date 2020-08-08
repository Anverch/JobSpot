import React from "react";
import { Header, Grid } from "semantic-ui-react";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <Grid>
        <Grid.Row id="nav" columns={2} verticalAlign="middle">
          <Grid.Column textAlign="center">
            <Header as="h2" id="nav-logo">
              <span id="job">Job</span>
              Spot
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <MenuDropdown />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
