import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";

export default function Nav() {
  const handleItemClick = (e) => {
    switch (e.target.id) {
      case "nav-link-home":
        window.location.replace("/home");
        break;
      case "nav-link-create":
        window.location.replace("/create-job");
        break;
      case "nav-link-logout":
        API.logout().then((res) => window.location.replace("/"));
        break;
    }
  };

  return (
    <>
      <Container id="nav-container">
        <Header as="h2" id="nav-logo">
          <span id="job">Job</span>Spot
        </Header>
        <Menu id="nav-menu">
          <Menu.Item
            id="dashboard-item"
            name="dashboard"
            onClick={handleItemClick}
          >
            <Link id="nav-link-home">Dashboard</Link>
          </Menu.Item>
          <Menu.Item id="job-item" name="Add New Job" onClick={handleItemClick}>
            <Link id="nav-link-create">Add New Job</Link>
          </Menu.Item>
          <Menu.Menu id="nav-menu2">
            <Menu.Item id="logout-btn" name="Logout" onClick={handleItemClick}>
              <Link id="nav-link-logout" onClick={handleItemClick}>
                Logout
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </>
  );
}
