import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";

export default function Nav() {
  const history = useHistory();
  const handleItemClick = (e) => {
    API.logout().then((res) =>{
      history.push("/")
    })
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
          >
            <Link to="/home" id="nav-link-home">Dashboard</Link>
          </Menu.Item>
          <Menu.Item id="job-item" name="Add New Job">
            <Link to= "/create-job" id="nav-link-create">Add New Job</Link>
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
