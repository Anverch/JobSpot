import React from "react";
import { Segment, List, Container } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <Segment id="footer">
      <Container textAlign="center">
        <p>Let's connect!</p>
        <List horizontal divided link size="medium">
          <List.Item as="a" href="https://github.com/ewirtz3">
            GitHub
          </List.Item>
          <List.Item
            as="a"
            href="https://www.linkedin.com/in/emily-wirtz-63b98519/"
          >
            LinkedIn
          </List.Item>
          <List.Item as="a" href="https://stackoverflow.com/story/ewirtz3">
            Stack Overflow
          </List.Item>
        </List>
        <p>Copyright 2020 Emily Wirtz</p>
      </Container>
    </Segment>
  );
}
