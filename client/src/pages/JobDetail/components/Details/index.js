//importing dependencies
import React from "react";
import { Header, Grid, Container } from "semantic-ui-react";
import UpdateButton from "../UpdateButton";
import { useUserContext } from "../../utils/UserContext";
import moment from "moment";

const styles = {
  detailsContainer: {
    background: "white",
    padding: 20,
    width: "80%",
    marginTop: 30,
    borderRadius: 2,
  },
};
export default function Details() {
  // invokes useUserContext(),
  const { user } = useUserContext();

  return (
    <>
      <Container fluid style={styles.detailsContainer}>
        <Grid rows={5}>
          <Grid.Row columns={2} id="meta-row">
            <Grid.Column textAlign="left">
              <Header as="h3">{user.activeJob.company}</Header>
              <span>{user.activeJob.job_title}</span>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Header as="h4">${user.activeJob.salary}</Header>
              <Header sub>Current status: {user.activeJob.status}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} id="details1-row">
            <Grid.Column>
              <Header sub>Phone interview: {user.activeJob.phone}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>
                In-Person Interview:{" "}
                {moment(user.activeJob.in_person_interview_date)
                  .local()
                  .format("MMMM Do YYYY, h:mm a")}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub></Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="details2-row" columns={3}>
            <Grid.Column>
              <Header sub>Full benefits: {user.activeJob.benefits}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>Location: {user.activeJob.location}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>Source: {user.activeJob.source}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="notes-row">
            <div>{user.activeJob.notes}</div>
          </Grid.Row>
          <Grid.Row columns={1}>
            <UpdateButton />
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
