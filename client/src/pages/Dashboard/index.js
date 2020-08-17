import React from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/GlobalState";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

export default function Dashboard() {
  const [state, _] = useUserContext();
  // const [user, setUser] = useState("");
  const filteredJobs = state.Jobs.filter(
    (job) => job.currentStatus !== "Closed"
  );

  return (
    <>
      <Container id="header-container">
        <Header className="greetings-header">
          Hello {state.name},
        </Header>
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
