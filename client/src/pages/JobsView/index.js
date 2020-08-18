import React from "react";
import JobsDisplay from "../../components/JobsDisplay";
import JobsFilter from "../../components/JobsFilter";
import Wrapper from "../../components/Wrapper";

export default function JobsView() {
  return (
    <>
      <JobsFilter />
      <JobsDisplay />
    </>
  );
}
