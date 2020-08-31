import React, { useEffect, useState } from "react";
import { Container, Dropdown, Icon } from "semantic-ui-react";
import { useUserContext } from "../../utils/UserContext";
import API from "../../utils/API";


const styles = {
  jobFilterContainer: {
    background: "white",
    padding: 20,
    width: "80%",
    marginTop: 30,
    borderRadius: 2,

  }
}
export default function JobsFilter() {
  const { user, setUser } = useUserContext();
  const handleFilter = (event, data) => {
    if (data.value !== "All") {
      const filteredJobs = user.Jobs.filter((job) => job.status === data.value);
      setUser({ ...user, filteredJobs: filteredJobs });
      return;
    }
    const allJobs = user.Jobs;
    setUser({ ...user, filteredJobs: allJobs });
    return;
  };

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let filterQuery = params.get("filter");
    if (filterQuery) {
      handleFilter(null, { value: filterQuery.replace("-", " ") });
    }
  }, []);

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
    <Container style={styles.jobFilterContainer} className="jobsFilter-Container">
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
