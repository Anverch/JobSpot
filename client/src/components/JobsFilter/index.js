import React, { useRef } from "react";
import { Container, Header, Dropdown } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsFilter() {
  const inputRef = useRef();
  const [state, dispatch] = useUserContext();
  const handleFilter = (data) => {
    if (data.value !== "All") {
      const filteredJobs = state.jobs.filter(
        (job) => job.currentStatus === data.value
      );
      dispatch({ type: "filter", filteredJobs });
      return;
    }
    const allJobs = state.jobs;
    dispatch({ type: "all", allJobs });
    return;
  };

  const filterOptions = [
    {
      key: "All",
      text: "All",
      value: "All",
    },
    {
      key: "Interested",
      text: "Interested",
      value: "Interested",
    },
    {
      key: "Applied",
      text: "Applied",
      value: "Applied",
    },
    {
      key: "In Process",
      text: "In Process",
      value: "In Process",
    },
    {
      key: "Closed",
      text: "Closed",
      value: "Closed",
    },
  ];

  return (
    <Container>
      <Header as="h4">
        <Header.Content>
          Filter jobs
          <Dropdown
            floating
            ref={inputRef}
            options={filterOptions}
            id="status-filter"
            defaultValue="All"
            onChange={handleFilter}
          ></Dropdown>
        </Header.Content>
      </Header>
    </Container>
  );
}
