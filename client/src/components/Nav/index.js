import React, { useState } from "react";

import { Header, Grid, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  const [activeItem, setActiveItem] = useState({ activeItem: "home" });

  const handleItemClick = (e, { name }) => {
    console.log(`e.target:>>`, e.target.value);
    setActiveItem({ name });
    console.log(`activeItem:>>`, activeItem);
  };

  return (
    <>
      <Grid id="nav-grid">
        <Grid.Row className="nav-gridRow">

          <Grid.Column textAlign="center">
            <Header as="h2" id="nav-logo">
              <span id="job">Job</span>
              Spot
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Menu secondary pointing>
              <Menu.Item
                name="dashboard"
                active={activeItem === "dashboard"}
                onClick={handleItemClick}
              >
                <Link to="/home">Dashboard</Link>
              </Menu.Item>
              <Menu.Item
                name="add new job"
                active={activeItem === "add new job"}
                onClick={handleItemClick}
              >
                <Link to="/create-job">Add New Job</Link>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item
                  name="logout"
                  active={activeItem === "logout"}
                  onClick={handleItemClick}
                />
                {/* <a>Logout</a> */}
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  );
}
