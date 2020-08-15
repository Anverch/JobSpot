import React from "react";
import { Container, Header, Dropdown, Icon } from "semantic-ui-react";

import { useUserContext } from "../../utils/GlobalState";

export default function JobsFilter() {
  const [state, dispatch] = useUserContext();
  const handleFilter = (event, data) => {
    console.log(`data:>>`, data);
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

  // useEffect(()=>{
  //   let search = window.location.search;
  //   let params = new URLSearchParams(search);
  //   let filterQuery = params.get("filter");
  //   if (filterQuery) {
  //     handleFilter(null, {value: filterQuery.replace("-"," ")})
  //   }
  // }, {})

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
      <Icon name="filter" />
      <Dropdown
        floating
        inline
        options={filterOptions}
        id="status-filter"
        defaultValue="All"
        onChange={handleFilter}
      ></Dropdown>
    </Container>
  );
}
