import React from "react";
import { Container, Header, Dropdown, Menu } from "semantic-ui-react";

export default function JobsFilter() {
  return (
    <Container>
      <Header as="h4">
        <Header.Content>
          Filter jobs
          <Dropdown inline="true">
            <Menu>
              <Menu.Item active="yes" data-text="overview">
                Overview
              </Menu.Item>
              <Menu.Item active="no" data-text="interested">
                Interested
              </Menu.Item>
              <Menu.Item active="no" data-text="applied">
                Applied
              </Menu.Item>
              <Menu.Item active="no" data-text="in process">
                In Process
              </Menu.Item>
              <Menu.Item active="no" data-text="outcome reached">
                Outcome Reached
              </Menu.Item>
            </Menu>
          </Dropdown>
        </Header.Content>
      </Header>
    </Container>
  );
}
