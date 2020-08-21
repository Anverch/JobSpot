import React, { useEffect, useState } from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

export default function Dashboard() {
  const { user } = useUserContext();

  const filteredJobs = user.Jobs.filter((job) => job.status !== "Closed");

  return (
    <>
      <Container id="header-container">
        <Header className="greetings-header">Hello {user.name},</Header>
        <p className="jobs-header">
          You have {filteredJobs.length > 0 ? filteredJobs.length : 0} open
          jobs, click below to filter by status
        </p>
        <Divider className="divider" />
        <JobsCounter />
      </Container>
    </>
  );
}
