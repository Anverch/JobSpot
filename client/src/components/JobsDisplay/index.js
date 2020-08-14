import React from "react";
import { Segment, List, Button } from "semantic-ui-react";
import "./JobsDisplay.css";
import UpdateButton from "../UpdateButton";
import ViewButton from "../ViewButton";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsDisplay() {
  const [state] = useUserContext();
  console.log(`state:>>`, state);

  return (
    <>
      <Segment id="jobs-segment" centered="true" raised>
        <List divided verticalAlign="middle" size="large">
          {state.filteredJobs.length > 0 &&
            state.filteredJobs.map((job, i) => {
              return (
                <List.Item key={i}>
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
        </List>
      </Segment>
    </>
  );
}
