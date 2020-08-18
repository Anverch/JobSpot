import React, { Component, useState } from "react";
import { Header, Grid, Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";

export default class Nav extends Component {
  // const [activeItem, setActiveItem] = useState({ activeItem: "home" });

  // const handleItemClick = (e, { name }) => {
  //   console.log(`e.target:>>`, e.target.value);
  //   setActiveItem({ name });
  //   console.log(`activeItem:>>`, activeItem);
  // };
  state = { activeItem: "dashboard" }
  handleItemClick = (e, { name }) =>  this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <>
        <Container id="nav-container">
          <Header as="h2" id="nav-logo">
            <span id="job">Job</span>Spot
          </Header>
          <Menu id="nav-menu">
            <Menu.Item id="dashboard-item" name="dashboard"
              active={activeItem === "dashboard"}
              onClick={this.handleItemClick}
            >
              <Link to="/home" id="nav-link-home">Dashboard</Link>
            </Menu.Item>
            <Menu.Item id="job-item" name="Add New Job"
              active={activeItem === "Add New Job"}
              onClick={this.handleItemClick}
            >
              <Link to="/create-job" id="nav-link-create">Add New Job</Link>
            </Menu.Item>
            <Menu.Menu id="nav-menu2">
              <Menu.Item id="logout-btn"
                name="Logout"
                active={activeItem === "Logout"}
                onClick={this.handleItemClick}
              >
                <Link to="/"
                 id="nav-link-logout"
                 onClick={API.logout}>Logout</Link>
              </Menu.Item>

              </Menu.Menu>
          </Menu>
        </Container>
      </>
    );
  }

}
