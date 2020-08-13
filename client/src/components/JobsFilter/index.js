import React, { useRef } from "react";
import { Container, Header, Dropdown } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsFilter() {
  const inputRef = useRef();
  const [state, dispatch] = useUserContext();
  const { user } = state;

  function handleFilter(e) {
    e.preventDefault();
    // dispatch({
    //   type: "filter",
    //   name: inputRef.current.value,
    // });
    switch (inputRef.current.value) {
      case "Interested": {
        const interested = user.jobs.filter(
          (job) => job.currentStatus === "Interested"
        );
        return interested;
      }

      case "Applied": {
        const applied = user.jobs.filter(
          (job) => job.currentStatus === "Applied"
        );
        return applied;
      }
      case "In Process": {
        const inProcess = user.jobs.filter(
          (job) => job.currentStatus === "In Process"
        );
        return inProcess;
      }
      case "Closed": {
        const closed = user.jobs.filter(
          (job) => job.currentStatus === "Closed"
        );
        return closed;
      }
      default:
        return state;
    }
  }
  const filterOptions = [
    {
      key: "Dashboard",
      text: "Dashboard",
      value: "Dashboard",
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
          ></Dropdown>
        </Header.Content>
      </Header>
    </Container>
  );
}
