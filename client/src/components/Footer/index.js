import React from "react";
import { Container, List } from "semantic-ui-react";
import "./Footer.css";

const styles = {
  footerContainer: {
    backgroundColor: "#ccf5ff",
    textAlign: "center",
    padding: 10,
    fontFamily: ["Roboto Slab", "serif"],
    width: "100%",
    display: "inline-block",
    fontSize: "18px",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    borderTop: "2px solid white",
    marginTop: "20px!important",
  },
  github: {
    color: "#ff9f29",
    fontSize: "1.3em",
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: ["Roboto Slab", "serif"],
  },
  shadow: {
    textShadow: "1px 1px #a929ff, 1px 1px #a929ff",
  },
};
export default function Footer() {
  return (
    <Container fluid style={styles.footerContainer} id="footer-container">
      <List id="footer-list">
        <List.Item
          style={styles.github}
          id="github"
          as="a"
          href="https://github.com/anverch/jobspot"
          target="_blank"
        >
          GitHub Repository
        </List.Item>
      </List>
      <p style={styles.shadow}>
        Copyright 2020 Emily Wirtz, Aleks Saiyan, Emily Carlisle, & Mackenzie
        Schutz
      </p>
    </Container>
  );
}
