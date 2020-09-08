import React from "react";
import { Segment, List, Container } from "semantic-ui-react";
import "./JobsDisplay.css";
import UpdateButton from "../../../../components/UpdateButton";
import ViewButton from "../../../../components/ViewButton";
import { useUserContext } from "../../../../utils/UserContext";
import moment from "moment";

const styles = {
  jobDisplayContainer: {
    background: "white",
    padding: 20,
    width: "80%",
    marginTop: 30,
    borderRadius: 2,
  },
  jobTitle: {
    fontFamily: ["Roboto Slab", "serif"],
    fontSize: 18,
    color: "#ff9f29",
  },
  jobInfo: {
    fontFamily: ["Roboto Slab", "serif"],
    fontSize: 14,
  },
  updateSpan: {
    color: "green",
  },
};

export default function JobsDisplay() {
  const { user } = useUserContext();

  const noFilteredJobs =
    !user.filteredJobs || (user.filteredJobs && user.filteredJobs.length === 0);

  return (
    <>
      <Container fluid style={styles.jobDisplayContainer}>
        <Segment id="jobs-segment" centered="true" raised>
          <List divided verticalAlign="middle" size="large">
            {noFilteredJobs && (
              <h2 style={styles.jobTitle}>No jobs with that status!</h2>
            )}
            {!noFilteredJobs &&
              user.filteredJobs.length > 0 &&
              user.filteredJobs.map((job, i) => {
                const updatedAt = moment(job.updatedAt).fromNow();
                return (
                  <List.Item key={i}>
                    <List.Content floated="right">
                      <ViewButton id={job.id} />
                      <UpdateButton id={job.id} />
                    </List.Content>
                    <List.Header style={styles.jobTitle}>
                      {job.company}
                    </List.Header>
                    <List.Content style={styles.jobInfo}>
                      {job.job_title}
                    </List.Content>
                    <List.Content style={styles.jobInfo}>
                      Last updated:{" "}
                      <span style={styles.updateSpan}>{updatedAt}</span>
                    </List.Content>
                    <List.Content style={styles.jobInfo}>
                      Current Status: {job.status}
                    </List.Content>
                  </List.Item>
                );
              })}
          </List>
        </Segment>
      </Container>
    </>
  );
}
