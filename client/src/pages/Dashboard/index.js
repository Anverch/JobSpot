
import React, { useEffect } from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";
import "semantic-ui-css/semantic.min.css";
import "../../styles.css";

export default function Dashboard() {
  const { user } = useUserContext();
  console.log(`user.jobs:>>`, user.jobs);

  useEffect(() => {
    console.log(`first:>>`);
    loadJobs();
    console.log(`second:>>`);
  }, []);

  const loadJobs = () => {
    API.getJobs(2)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };


  return (
    <>
      <Container>
        <Segment raised centered="true" padded="very">
          <Header
            as="h1"
            color="orange"
            textAlign="center"
            id="greeting-header"
          >
            Hello, {user.fullName}
          </Header>
        </Segment>
        <Segment raised id="jobs-header">
          <Header as="h3" color="orange" textAlign="center">
            You have {user.jobs.length > 0 ? user.jobs.length : 0} open jobs,
            click below to filter by status

          </Header>
          <Divider />
          <JobsCounter />
        </Segment>
      </Container>
    </>
  );
}
