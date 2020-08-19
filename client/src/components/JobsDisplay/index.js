import React from "react";
import { Segment, List } from "semantic-ui-react";
import "./JobsDisplay.css";
import UpdateButton from "../UpdateButton";
import ViewButton from "../ViewButton";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsDisplay() {
  const [state] = useUserContext();
  const noFilteredJobs =
    !state.filteredJobs ||
    (state.filteredJobs && state.filteredJobs.length === 0);

  return (
    <>
      <Segment id="jobs-segment" centered="true" raised>
        <List divided verticalAlign="middle" size="large">
          {noFilteredJobs && <h2>No jobs with that status!</h2>}
          {state.filteredJobs.length > 0 &&
            state.filteredJobs.map((job, i) => {
              return (
                <List.Item key={i}>
                  <List.Content floated="right">
                    <ViewButton id={job.id} />
                    <UpdateButton />
                  </List.Content>
                  <List.Header>{job.company}</List.Header>
                  <List.Content>{job.job_title}</List.Content>
                  <List.Content>Last updated: yesterday</List.Content>
                </List.Item>
              );
            })}
        </List>
      </Segment>
    </>
  );
}
