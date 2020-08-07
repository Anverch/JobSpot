import React from "react";
import { Segment, List, Container } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <Segment id="footer">
      <Container textAlign="center">
        <List horizontal divided link size="medium">
          <List.Item
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
    </Segment>
  );
}
