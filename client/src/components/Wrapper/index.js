import React from "react";
import { Container, Segment } from "semantic-ui-react";
import "./Wrapper.css";

export default function Wrapper({ children }) {
  return (
    <Container>
      <Segment raised centered="true" padded="very">
        {children}
      </Segment>
    </Container>
  );
}
