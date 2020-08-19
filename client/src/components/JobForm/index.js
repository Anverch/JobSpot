import React, { useState } from "react";
import { Header, Form, Button } from "semantic-ui-react";
import "./JobForm.css";
import { useUserContext } from "../../utils/GlobalState";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";

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
  const history = useHistory();
  const [state, dispatch] = useUserContext();
  const [newJob, setNewJob] = useState({
    id: Math.floor(Math.random() * 1000),
    company: "",
    job_title: "",
    salary: 0,
    status: "interested",
    phone: "",
    in_person_interview_date: "",
    benefits: "",
    location: "",
    notes: [],
    user_id: state.id,
  });

  const handleSubmit = () => {
    console.log(`newJob:>>`, newJob);
    dispatch({ type: "submit", newJob });

    history.push("/home");
  };

  const handleInputChange = (event) => {
    console.log(`event.target:>>`, event.target);
    const { name, value } = event.target;
    setNewJob({ ...newJob, [name]: value });
    console.log(`newJob:>>`, newJob);
  };

  const handleDropdownChange = (event) => {
    const label = event.nativeEvent.target.parentElement.parentElement.id;
    const choice = event.nativeEvent.target.children[0].textContent;
    setNewJob({ ...newJob, [label]: choice });
    console.log(`newJob:>>`, newJob);
  };

  return (
    <div>
      <Header as="h1">Job Info</Header>
      <Form id="jobForm" onSubmit={handleSubmit}>
        <Form.Input
          label="Company name"
          name="name"
          onChange={handleInputChange}
          required
        />
        <Form.Input
          label="Job title"
          placeholder="e.g. React Developer"
          name="job_title"
          required
          onChange={handleInputChange}
        />
        <Form.Input
          label="Annual salary"
          name="salary"
          onChange={handleInputChange}
          required
        />

        <Form.Select
          label="Job Status"
          options={jobStatusOptions}
          placeholder="Select Job Status"
          id="status"
          required
          onChange={handleDropdownChange}
        />

        <Form.Select
          label="Full Benefits Offered?"
          options={yesNoOptions}
          id="benefits"
          onChange={handleDropdownChange}
        />
        <Form.Input
          label="Location"
          placeholder="e.g. San Francisco, CA; Remote"
          name="location"
          required
          onChange={handleInputChange}
        />
        <Header as="h3">Interview Dates</Header>
        <Form.Input
          label="Phone Interview"
          placeholder="e.g. 6/30/2020"
          name="phone"
          onChange={handleInputChange}
        />
        <Form.Input
          label="In-Person Interview"
          placeholder="e.g. 7/10/2020"
          name="in_person_interview_date"
          onChange={handleInputChange}
        />

        <Form.TextArea
          label="Notes"
          rows="3"
          placeholder="e.g. Long commute, 4 direct reports, Commuter benefits, Catered lunches"
          name="notes"
          onChange={handleInputChange}
        />
        <Button type="submit" color="yellow" size="large">
          Submit
        </Button>
      </Form>
    </div>
  );
}
