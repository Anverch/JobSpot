//this functional component uses the UserContext to render a specific job and its details
//pulls from user.jobs[i] where job id matches
//use reducer to filter

//importing dependencies
import React, { useEffect } from "react";
import { Header, Form, Grid, TextArea } from "semantic-ui-react";
import UpdateButton from "../UpdateButton";
import { useUserContext } from "../../utils/GlobalState";

export default function Details() {
  // invokes useUserContext(),
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    console.log(`state.activeJob:>>`, state.activeJob);
  });
  return (
    <>
      <Grid rows={5}>
        <Grid.Row columns={2} id="meta-row">
          <Grid.Column textAlign="left">
            <Header as="h3">{state.activeJob.companyName}</Header>
            <span>{state.activeJob.jobTitle}</span>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as="h4">${state.activeJob.salary}</Header>
            <Header sub>Current status: {state.activeJob.currentStatus}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} id="details1-row">
          <Grid.Column>
            <Header sub>Phone interview: {state.activeJob.phoneInt}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>
              In-Person Interview: {state.activeJob.inPersonInt}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="details2-row" columns={3}>
          <Grid.Column>
            <Header sub>Full benefits: {state.activeJob.fullBenefits}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>Location: {state.activeJob.location}</Header>
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
      {/* <Grid celled id="detail-grid">
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
      </Grid> */}


    </>
  );
}
