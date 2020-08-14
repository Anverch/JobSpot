import React, { useContext } from "react";
import { Header, Form, Grid, TextArea } from "semantic-ui-react";

const yesNoOptions = [
  { key: "y", text: "Yes", value: "yes" },
  { key: "n", text: "No", value: "no" },
];

const jobStatusOptions = [
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

export default function JobForm() {
  return (
    <Grid rows={4}>
      <Form>
        <Grid.Row columns={4}>
          <Form.Group widths="3">
            <Form.Input fluid label="Company name" />
            <Form.Input
              fluid
              label="Position title"
              placeholder="e.g. React Developer"
            />
            <Form.Input fluid label="Annual salary" />
            <Form.Select
              fluid
              label="Job Status"
              options={jobStatusOptions}
              placeholder="Select Job Status"
            />
          </Form.Group>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Header as="h3">Interview Dates</Header>
          <Form.Group widths="2">
            <Form.Input
              fluid
              label="Phone Interview"
              placeholder="e.g. 6/30/2020"
            />
            <Form.Input
              fluid
              label="In-Person Interview"
              placeholder="e.g. 7/10/2020"
            />
          </Form.Group>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Form.Select
            fluid
            label="Full Benefits Offered?"
            options={yesNoOptions}
          />
          <Form.Input
            fluid
            label="Location"
            placeholder="e.g. San Francisco, CA; Remote"
          />
        </Grid.Row>
        <Grid.Row columns={1}>
          <Form.TextArea
            label="Notes"
            placeholder="e.g. Long commute, 4 direct reports, Commuter benefits, Catered lunches"
          />
        </Grid.Row>
      </Form>
    </Grid>
  );
}
