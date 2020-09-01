import React from "react";
import { Header, Menu, Container } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import "./Nav.css";
import API from "../../utils/API";

const styles = {
  navContainer: {
    backgroundColor: "#29d4ff",
    marginBottom: "15px",
  },
  navHeader: {
    textAlign: "center",
    fontSize: "5em",
    color: "white",
    fontFamily: ["Londrina Solid", "cursive"],
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  spanHeader: {
    color: "#ff9f29",
    textShadow:
      "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  navItems: {
    color: "#29d4ff",
    textDecoration: "none",
    fontSize: 18,
    fontFamily: ["Roboto Slab", "serif"],
  },
};

export default function Nav() {
  const history = useHistory();
  const handleItemClick = (e) => {
    API.logout().then((res) => {
      history.push("/");
    });
  };

  return (
    <>
      <Container fluid style={styles.navContainer} id="nav-container">
        <Header style={styles.navHeader} as="h2" id="nav-logo">
          <span style={styles.spanHeader} id="job">
            Job
          </span>
          Spot
        </Header>
        <Menu secondary pointing id="nav-menu">
          <Menu.Item id="dashboard-item" name="dashboard">
            <Link
              style={styles.navItems}
              onMouseOver={(e) => {
                e.target.style.color = "#a929ff";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#29d4ff";
              }}
              to="/home"
              id="nav-link-home"
            >
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item id="job-item" name="Add New Job">
            <Link
              style={styles.navItems}
              onMouseOver={(e) => {
                e.target.style.color = "#a929ff";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#29d4ff";
              }}
              to="/create-job"
              id="nav-link-create"
            >
              Add New Job
            </Link>
          </Menu.Item>
          <Menu.Menu position="right" id="nav-menu2">
            <Menu.Item id="logout-btn" name="Logout" onClick={handleItemClick}>
              <Link
                style={styles.navItems}
                id="nav-link-logout"
                onMouseOver={(e) => {
                  e.target.style.color = "#a929ff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#29d4ff";
                }}
                onClick={handleItemClick}
              >
                Logout
              </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </>
  );
}
