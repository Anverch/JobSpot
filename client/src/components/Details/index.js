//this functional component uses the UserContext to render a specific job and its details
//pulls from user.jobs[i] where job id matches
//use reducer to filter

//importing dependencies
import React from "react";
import { Header, Form, Grid, TextArea, Segment } from "semantic-ui-react";
import UpdateButton from "../UpdateButton";
import { useUserContext } from "../../utils/GlobalState";

export default function Details() {
  // invokes useUserContext(),
  const [state, dispatch] = useUserContext();
  console.log(`state:>>`, state);

  return (
    <>
      <Grid celled id="detail-grid">
        <Header as="h1" id="myjobs-header">
          My Jobs
      </Header>
        <Grid.Row id="details-row">
          <Grid.Column id="details-column">
            <Segment id="job-details">
              <Header id="details-header" as="h2">
                Facebook
            </Header>
              <p id="job-title">Backend Developer</p>
              <Header id="income-header" as="h4">
                $95,000
            </Header>
              <Header id="status" as="h4">
                Current Status: In process
            </Header>
              <Header id="interview1">Phone Interview: 06/27/2020</Header>
              <Header id="interview2">In-Person Interview: 07/03/2020</Header>
              <Header id="benefits" as="h4">
                Full Benefits: Yes
            </Header>
              <Header id="location" as="h4">
                Location: Remote
            </Header>
              <Form id="notes">
                <TextArea placeholder="Job Notes" />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>


    </>
  );
}
