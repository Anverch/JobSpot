import React from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter/JobsCounter";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <Container>
        <Segment raised centered="true" id="greetingSegment">
          <Header as="h1" color="orange" textAlign="center">
            Hello, emily
          </Header>
        </Segment>
        <Segment raised id="newJobSegment">
          <Header as="h3" color="orange" textAlign="center">
            You have 18 open jobs, click below to filter by status
          </Header>
          <Divider />
          <JobsCounter />
        </Segment>
      </Container>
      <Footer />
    </>
  );
}
