import React from "react";
import { Header, Form, Button } from "semantic-ui-react";
import "./JobForm.css";

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
    <div>
      <Header as="h1">Job Info</Header>
      <Form id="jobForm">
        <Form.Input label="Company name" />
        <Form.Input label="Job title" placeholder="e.g. React Developer" />
        <Form.Input label="Annual salary" />

        <Form.Select
          label="Job Status"
          options={jobStatusOptions}
          placeholder="Select Job Status"
        />

        <Form.Select label="Full Benefits Offered?" options={yesNoOptions} />
        <Form.Input
          label="Location"
          placeholder="e.g. San Francisco, CA; Remote"
        />
        <Header as="h3">Interview Dates</Header>
        <Form.Input label="Phone Interview" placeholder="e.g. 6/30/2020" />
        <Form.Input label="In-Person Interview" placeholder="e.g. 7/10/2020" />

        <Form.TextArea
          label="Notes"
          rows="3"
          placeholder="e.g. Long commute, 4 direct reports, Commuter benefits, Catered lunches"
        />
        <Button type="submit" color="yellow" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
