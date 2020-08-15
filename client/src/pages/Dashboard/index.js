import React, { useEffect } from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

export default function Dashboard() {
  const [state, _] = useUserContext();

  const filteredJobs = state.jobs.filter(
    (job) => job.currentStatus !== "Closed"
  );

  return (
    <>
      <Segment className="header-segment">
        <Header className="greetings-header"
          as="h1"
        >
          Hello, {state.name}
        </Header>
      </Segment>
      <Segment className="jobs-header">
        <Header as="h3" className="jobs-header">
          You have {filteredJobs.length > 0 ? filteredJobs.length : 0} open
          jobs, click below to filter by status
        </Header>
        <Divider />
        <JobsCounter />
      </Segment>
    </>
  );
}
