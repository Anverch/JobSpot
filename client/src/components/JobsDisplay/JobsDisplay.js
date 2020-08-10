import React from "react";
import { Segment, List, Button } from "semantic-ui-react";
import "./JobsDisplay.css";
import UpdateButton from "../UpdateButton/UpdateButton";
// import API from '../../utils/API'

export default function JobsDisplay() {
  return (
    <>
      <Segment id="jobs-segment" centered="true" raised>
        <List divided verticalAlign="middle" size="large">
          <List.Item>
            <List.Content floated="right">
              <UpdateButton />
            </List.Content>
            <List.Header>Facebook</List.Header>
            <List.Content>Backend Developer</List.Content>
            <List.Content>Last updated: yesterday</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <UpdateButton />
            </List.Content>
            <List.Header>American Century</List.Header>
            <List.Content>Frontend Developer</List.Content>
            <List.Content>Last updated: 3 days ago</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <UpdateButton />
            </List.Content>
            <List.Header>Google</List.Header>
            <List.Content>UX Designer</List.Content>
            <List.Content>Last updated: today</List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <UpdateButton />
            </List.Content>
            <List.Header>Sonder</List.Header>
            <List.Content>Software Engineer</List.Content>
            <List.Content>Last updated: yesterday</List.Content>
          </List.Item>
        </List>
      </Segment>
    </>
  );
}
