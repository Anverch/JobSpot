import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Label, Menu, Container, Grid } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";
import API from "../../utils/API"

export default function JobsCounter() {
  const history = useHistory();
  const [state, dispatch] = useUserContext();

  // creating state object for jobs 
  const [jobs, setJobs] = useState([]);
  //retrieve data from database and set to state
  useEffect(async  ()=>{
    const results = await API.getJobs();
    setJobs(results)
  }, {})

  const filterJobs = (filter) => {
    switch (filter) {
      case "All": {
        return jobs.length;
      }

      case "Interested": {
        const interested = jobs.filter(
          (job) => job.status === "Interested"
        );
        return interested.length;
      }
      case "Applied": {

        const applied = jobs.filter(
          (job) => job.status === "Applied"
        );

        return applied.length;
      }
      case "In Process": {
        const inProcess = jobs.filter(
          (job) => job.status === "In Process"
        );
        return inProcess.length;
      }
      case "Closed": {

        const closed = jobs.filter(
          (job) => job.status === "Closed"
        );

        return closed.length;
      }
      default:
        return jobs.length;
    }
  };

  const [activeItem, setActiveItem] = useState({
    activeItem: "",
  });

  const handleClick = ({ activeItem }) => {
    setActiveItem(activeItem);
    history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
  };

  return (
    <Menu vertical id="jobs-counter-menu">
      <Menu.Item
        id="job-status-all"
        name="All"
        active={activeItem === "All"}
        onClick={() => handleClick({ activeItem: "All" })}
      >
        All
        <Label color="teal">{filterJobs("All")}</Label>
      </Menu.Item>
      <Menu.Item
        id="job-status-interested"
        name="Interested"
        active={activeItem === "Interested"}
        onClick={() => handleClick({ activeItem: "Interested" })}
      >
        Interested
        <Label color="purple">{filterJobs("Interested")}</Label>
      </Menu.Item>
      <Menu.Item
        id="job-status-applied"
        name="Applied"
        active={activeItem === "Applied"}
        onClick={() => handleClick({ activeItem: "Applied" })}
      >
        Applied
        <Label color="blue">{filterJobs("Applied")}</Label>
      </Menu.Item>
      <Menu.Item
        id="job-status-inProcess"
        name="In Process"
        active={activeItem === "In Process"}
        onClick={() => handleClick({ activeItem: "In Process" })}
      >
        In Process
        <Label color="green">{filterJobs("In Process")}</Label>
      </Menu.Item>
      <Menu.Item
        id="job-status-closed"
        name="Closed"
        active={activeItem === "Closed"}
        onClick={() => handleClick({ activeItem: "Closed" })}
      >
        Closed
        <Label color="red">{filterJobs("Closed")}</Label>
      </Menu.Item>

      <Menu.Item
        id="job-status-create"
        name="Create"
        active={activeItem === "Create"}
        onClick={() => history.push("/create-job")}
      >
        New Job
        <Label color="brown">Add</Label>
      </Menu.Item>
    </Menu>
  );
}
