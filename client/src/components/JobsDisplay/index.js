import React from "react";
import { Segment, List, Button } from "semantic-ui-react";
import "./JobsDisplay.css";
import UpdateButton from "../UpdateButton";
import ViewButton from "../ViewButton";
import { useJobContext } from "../../utils/JobContext";
import { useUserContext } from "../../utils/GlobalState";
// import API from '../../utils/API'

export default function JobsDisplay() {
  // const { job } = useJobContext();
  // console.log(`job:>>`, job);
  const [state, dispatch] = useUserContext();
  console.log(`state:>>`, state);
  const { user } = state;

  return (
    <>
      <Segment id="jobs-segment" centered="true" raised>
        <List divided verticalAlign="middle" size="large">
          {user.jobs.map((job) => {
            return (
              <List.Item>
                <List.Content floated="right">
                  <ViewButton />
                  <UpdateButton />
                </List.Content>
                <List.Header>{job.companyName}</List.Header>
                <List.Content>{job.positionTitle}</List.Content>
                <List.Content>Last updated: yesterday</List.Content>
              </List.Item>
            );
          })}

          {/* <List.Item>
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
          </List.Item> */}
        </List>
      </Segment>
    </>
  );
}
