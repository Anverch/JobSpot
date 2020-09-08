import React from "react";
import { Container, Dropdown, Icon } from "semantic-ui-react";
import { useUserContext } from "../../../../utils/UserContext";
import API from "../../../../utils/API";

const styles = {
  jobFilterContainer: {
    background: "white",
    padding: 20,
    width: "80%",
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 2,
  },
};

export default function JobsFilter() {
  const { user, setUser } = useUserContext();

  const handleDropdownFilter = async (event, data) => {
    if (data.value !== "All") {
      switch (data.value) {
        case "Interested": {
          let userJobs = await API.getJobsInterested(user.id);
          setUser({
            ...user,
            filteredJobs: userJobs.data,
            filter: data.value,
          });
          break;
        }
        case "Applied": {
          let userJobs = await API.getJobsApplied(user.id);
          setUser({ ...user, filteredJobs: userJobs.data, filter: data.value });
          break;
        }
        case "In Process": {
          let userJobs = await API.getJobsInProcess(user.id);
          setUser({ ...user, filteredJobs: userJobs.data, filter: data.value });
          break;
        }
        case "Closed": {
          let userJobs = await API.getJobsClosed(user.id);
          setUser({ ...user, filteredJobs: userJobs.data, filter: data.value });
          break;
        }
      }
    } else {
      let allJobs = await API.getJobs();
      setUser({ ...user, filteredJobs: allJobs.data, filter: "All" });
      return;
    }
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
    <Container style={styles.jobFilterContainer}>
      <Icon name="filter" />
      <Dropdown
        floating
        inline
        options={filterOptions}
        id="status-filter"
        defaultValue={user.filter}
        onChange={handleDropdownFilter}
      ></Dropdown>
    </Container>
  );
}
