import React from "react";
import JobsDisplay from "./components/JobsDisplay";
import JobsFilter from "./components/JobsFilter";

export default function JobsView() {
  return (
    <>
      <JobsFilter />
      <JobsDisplay />
    </>
  );
}
