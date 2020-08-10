import React from "react";
import { Container, Segment } from "semantic-ui-react";
import Details from "../../components/Details/Details";

export default function JobDetail() {
  return (
    <Container>
      <Segment raised centered="true" padded="very">
        <Details />
      </Segment>
    </Container>
  );
}
