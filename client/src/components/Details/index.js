//this functional component uses the UserContext to render a specific job and its details
//pulls from user.jobs[i] where job id matches
//use reducer to filter

//importing dependencies
import React from "react";
import { Header, Form, Grid, TextArea } from "semantic-ui-react";
import UpdateButton from "../UpdateButton";
import { useUserContext } from "../../utils/GlobalState";

export default function Details() {
  // invokes useUserContext(),
  const [state, dispatch] = useUserContext();
  console.log(`state:>>`, state);

  return (
    <>
      <Grid id="detail-grid">
        <Grid.Row columns={2} id="meta-row">
          <Grid.Column textAlign="left">
            <Header as="h3">Facebook</Header>
            <span>Backend Developer</span>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as="h4">$95,000</Header>
            <Header sub>Current status: In Process</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} id="details1-row">
          <Grid.Column>
            <Header sub>Phone interview: 6/27/2020</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>In-Person Interview: 7/3/2020</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="details2-row" columns={3}>
          <Grid.Column>
            <Header sub>Full benefits: yes</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>Location: Remote</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="notes-row">
          <Form>
            <TextArea placeholder="Job notes" rows={5} />
          </Form>
        </Grid.Row>
        <Grid.Row columns={1}>
          <UpdateButton />
        </Grid.Row>
      </Grid>
    </>
  );
}
