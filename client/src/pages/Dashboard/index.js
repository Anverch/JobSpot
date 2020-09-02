import React from "react";
import { Container, Header } from "semantic-ui-react";
import JobsCounter from "./components/JobsCounter";
import { useUserContext } from "../../utils/UserContext";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const styles = {
  headerStyle: {
    color: "#ff9f29",
    fontSize: "3em",
    textAlign: "center",
    fontFamily: ["Roboto Slab", "serif"],
  },
  name: {
    textShadow:
      "1px 1px 0 rgba(0,0,0,.95), -1px -1px 0 #a929ff, 1px -1px 0 #a929ff, -1px 1px 0 #a929ff, 1px 1px 0 #a929ff",
  },
  jobsHeaderStyle: {
    color: "#ff9f29",
    fontSize: "1.3em",
    textAlign: "center",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: ["Roboto Slab", "serif"],
  },
  jobsNumber: {
    color: "#a929ff",
  },
};
export default function Dashboard() {
  const { user } = useUserContext();

  const filteredJobs = user.Jobs.filter((job) => job.status !== "Closed");

  return (
    <>
      <Container fluid>
        <Header style={styles.headerStyle} className="greetings-header">
          Hello <span style={styles.name}>{user.name}</span>,
        </Header>
        <p style={styles.jobsHeaderStyle} className="jobs-header">
          You have{" "}
          <span style={styles.jobsNumber}>
            {filteredJobs.length > 0 ? filteredJobs.length : 0}
          </span>{" "}
          open jobs, click below to filter by status
        </p>
        <JobsCounter />
      </Container>
    </>
  );
}
