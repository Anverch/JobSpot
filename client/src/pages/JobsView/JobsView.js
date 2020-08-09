import React, { useState } from "react";
import JobsDisplay from "../../components/JobsDisplay/JobsDisplay";
import JobsFilter from "../../components/JobsFilter/JobsFilter";
import { Container, Segment } from "semantic-ui-react";

export default function JobsView() {
  const [activeFilter, setActiveFilter] = useState({});

  return (
    <Container>
      <Segment raised centered="true" id="jobsSegment">
        <JobsFilter />
        <JobsDisplay />
      </Segment>
    </Container>
  );
}
