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
  warningSpan: {
    color: "yellow",
  },
  overdueSpan: {
    color: "red",
  },
};

export default function JobsDisplay() {
  const { user } = useUserContext();
  console.log(`user.filter:>>`, user.filter);
  console.log(`user.filteredJobs:>>`, user.filteredJobs);

  const noFilteredJobs =
    !user.filteredJobs || (user.filteredJobs && user.filteredJobs.length === 0);

  console.log(`noFilteredJobs:>>`, noFilteredJobs);
  console.log(
    `user.filteredJobs.data.length:>>`,
    user.filteredJobs.data.length
  );

  return (
    <>
      <Container fluid style={styles.jobDisplayContainer}>
        <Segment id="jobs-segment" centered="true" raised>
          <List divided verticalAlign="middle" size="large">
            {noFilteredJobs && (
              <h2 style={styles.jobTitle}>No jobs with that status!</h2>
            )}
            {!noFilteredJobs &&
              user.filteredJobs.data.length > 0 &&
              user.filteredJobs.data.map((job, i) => {
                console.log(`job:>>`, job);
                const updatedAt = moment(job.updatedAt).fromNow();
                console.log(`updatedAt:>>`, updatedAt);
                console.log(`job.updatedAt:>>`, job.updatedAt);
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
                      <span
                        style={
                          updatedAt < 5
                            ? styles.updateSpan
                            : updatedAt >= 5 && updatedAt < 8
                            ? styles.warningSpan
                            : styles.overdueSpan
                        }
                      >
                        {updatedAt}
                      </span>
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
