import React from "react";
import { Container, List } from "semantic-ui-react";
import "./Footer.css";

const styles = {
  footerContainer: {
    backgroundColor: "rgb(22 25 29)",
    textAlign: "center",
    padding: 10,
    fontFamily: "Times New Roman",
    width: "100%",
    display: "inline-block",
    fontSize: "1em",
    margin: "0px!important",
    color: "#F29F05",
    position: "fixed",
    left: 0,
    bottom: 0,
    right: 0,
    borderTop: "2px solid white",
    marginTop: 20
  
  },
  github: {
    color: "#F24405",
    fontSize: "1.3em",
    fontWeight: "bold",
    textDecoration: "underline",
    fontFamily: "Times New Roman"
  }
}
export default function Footer() {
  return (
    <Container fluid style={styles.footerContainer} id="footer-container">
      <List id="footer-list">
        <List.Item style={styles.github} id="github"
          as="a"
          href="https://github.com/anverch/jobspot"
          target="_blank"
        >
          GitHub Repository
          </List.Item>
      </List>
      <p>
        Copyright 2020 Emily Wirtz, Aleks Saiyan, Emily Carlisle, & Mackenzie
        Schutz
        </p>
    </Container>

  );
}
