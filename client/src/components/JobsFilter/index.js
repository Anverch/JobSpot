import React from "react";
import { Container, Header, Dropdown } from "semantic-ui-react";

export default function JobsFilter() {
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
      key: "Outcome Reached",
      text: "Outcome Reached",
      value: "Outcome Reached",
    },
  ];

  return (
    <Container>
      <Header as="h4">
        <Header.Content>
          Filter jobs
          <Dropdown
            floating
            options={filterOptions}
            id="status-filter"
          ></Dropdown>
        </Header.Content>
      </Header>
    </Container>
  );
}
