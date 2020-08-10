import React from "react";
import { Container, Segment } from "semantic-ui-react";
import JobForm from "../../components/JobForm/JobForm";

export default function CreateJob() {
  return (
    <Container>
      <Segment raised centered="true" padded="very">
        <JobForm />
      </Segment>
    </Container>
  );
}
