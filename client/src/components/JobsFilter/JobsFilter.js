import React from "react";
import { Container, Header, Dropdown, Menu } from "semantic-ui-react";

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
          <Dropdown floating options={filterOptions} id="status-filter">
            {/* <Menu>
              <Menu.Item active data-text="overview">
                Overview
              </Menu.Item>
              <Menu.Item data-text="interested">Interested</Menu.Item>
              <Menu.Item data-text="applied">Applied</Menu.Item>
              <Menu.Item data-text="in process">In Process</Menu.Item>
              <Menu.Item data-text="outcome reached">Outcome Reached</Menu.Item>
            </Menu> */}
          </Dropdown>
        </Header.Content>
      </Header>
    </Container>
  );
}
