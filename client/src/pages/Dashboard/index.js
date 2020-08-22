import React, { useEffect, useState } from "react";
import { Container, Header, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const styles = {
  // containerStyle: {
  //   backgroundImage: "url(./dark-honeycomb.jpg)"

  // },
  headerStyle: {
    color: "#F25C05",
    fontSize: "3em",
    textAlign: "center",
    fontFamily: "Times New Roman",

  },
  jobsHeaderStyle: {
    color: "rgb(242, 92, 5)",
    fontSize: "1.3em",
    textAlign: "center",
    width: "80%",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Times New Roman"

  }
}
export default function Dashboard() {
  const { user } = useUserContext();

  const filteredJobs = user.Jobs.filter((job) => job.status !== "Closed");

  return (
    <>
      <Container fluid >
        <Header style={styles.headerStyle} className="greetings-header">Hello {user.name},</Header>
        <p style={styles.jobsHeaderStyle} className="jobs-header">
          You have {filteredJobs.length > 0 ? filteredJobs.length : 0} open
          jobs, click below to filter by status
        </p>
        <Divider className="divider" />
        <JobsCounter />
      </Container>
    </>
  );
}
