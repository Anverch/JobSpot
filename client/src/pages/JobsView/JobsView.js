import React, { useState } from "react";
import JobsDisplay from "../../components/JobsDisplay/JobsDisplay";
import JobsFilter from "../../components/JobsFilter/JobsFilter";
import Wrapper from "../../components/Wrapper/Wrapper";

export default function JobsView() {
  const [activeFilter, setActiveFilter] = useState({});

  return (
    <Wrapper>
      <JobsFilter />
      <JobsDisplay />
    </Wrapper>
  );
}
