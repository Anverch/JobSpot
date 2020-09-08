//importing dependencies
import React from "react";
import { Header, Grid, Container } from "semantic-ui-react";
import UpdateButton from "../../../../components/UpdateButton";
import { useUserContext } from "../../../../utils/UserContext";
import moment from "moment";

const styles = {
  detailsContainer: {
    background: "white",
    padding: 40,
    width: "80%",
    marginTop: 30,
    borderRadius: 2,
    fontFamily: ["Roboto Slab", "serif"],
  },
  larger: {
    fontSize: 20,
  },
  smaller: {
    fontSize: 14,
  },
  fieldLabel: {
    color: "#ff9f29",
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
              <Header as="h3" style={styles.larger}>
                {user.activeJob.company}
              </Header>
              <span style={styles.fieldLabel}>{user.activeJob.job_title}</span>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Header as="h4" style={styles.larger}>
                ${user.activeJob.salary}
              </Header>
              <Header sub>
                <span style={styles.fieldLabel}>Current status:</span>{" "}
                {user.activeJob.status}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3} id="details1-row">
            <Grid.Column>
              <Header sub>
                <span style={styles.fieldLabel}>Phone interview:</span>{" "}
                {user.activeJob.phone}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>
                <span style={styles.fieldLabel}>In-Person Interview:</span>{" "}
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
              <Header sub>
                <span style={styles.fieldLabel}>Full benefits:</span>{" "}
                {user.activeJob.benefits}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>
                <span style={styles.fieldLabel}>Location:</span>{" "}
                {user.activeJob.location}
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header sub>
                <span style={styles.fieldLabel}>Job Source:</span>{" "}
                {user.activeJob.source}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row id="notes-row">
            <Grid.Column>
              <Header sub>
                <span style={styles.fieldLabel}>Notes:</span>
              </Header>
              <div>{user.activeJob.notes}</div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <UpdateButton id={user.activeJob.id} />

          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
