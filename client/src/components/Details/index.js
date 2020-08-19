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
            <Header as="h3">{state.activeJob.company}</Header>
            <span>{state.activeJob.job_title}</span>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Header as="h4">${state.activeJob.salary}</Header>
            <Header sub>Current status: {state.activeJob.status}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} id="details1-row">
          <Grid.Column>
            <Header sub>Phone interview: {state.activeJob.phone}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>
              In-Person Interview: {state.activeJob.in_person_interview_date}
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub></Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="details2-row" columns={3}>
          <Grid.Column>
            <Header sub>Full benefits: {state.activeJob.benefits}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>Location: {state.activeJob.location}</Header>
          </Grid.Column>
          <Grid.Column>
            <Header sub>Source: {state.activeJob.source}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="notes-row">
          <div>{state.activeJob.notes}</div>
        </Grid.Row>
        <Grid.Row columns={1}>
          <UpdateButton />
        </Grid.Row>
      </Grid>
    </>
  );
}
