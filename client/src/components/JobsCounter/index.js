import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, Menu } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsCounter() {
  const history = useHistory();
  const [state, dispatch] = useUserContext();
  console.log(`state>>`, state);

  const filterJobs = (filter) => {
    switch (filter) {
      case "All": {
        return state.jobs.length;
      }

      case "Interested": {
        const interested = state.jobs.filter(
          (job) => job.currentStatus === "Interested"
        );
        return interested.length;
      }
      case "Applied": {
        const applied = state.jobs.filter(
          (job) => job.currentStatus === "Applied"
        );
        return applied.length;
      }
      case "In Process": {
        const inProcess = state.jobs.filter(
          (job) => job.currentStatus === "In Process"
        );
        return inProcess.length;
      }
      case "Closed": {
        const closed = state.jobs.filter(
          (job) => job.currentStatus === "Closed"
        );
        return closed.length;
      }
      default:
        return state.jobs.length;
    }
  };

  const [activeItem, setActiveItem] = useState({
    activeItem: "",
  });

  const handleClick = ({activeItem}) =>{
    setActiveItem(activeItem);
    history.push(`/view?filter=${activeItem.replace(" ","-")}`);
  }

  return (
    <Menu id="jobs-counter-menu" fluid vertical inverted color="yellow">
      <Menu.Item
        name="All"
        active={activeItem === "All"}
        onClick={() => handleClick({ activeItem: "All" })}
      >
        <Label color="purple">{filterJobs("All")}</Label>
        All
      </Menu.Item>
      <Menu.Item
        name="Interested"
        active={activeItem === "Interested"}
        onClick={() => handleClick({ activeItem: "Interested" })}
      >
        <Label color="teal">{filterJobs("Interested")}</Label>
        Interested
      </Menu.Item>
      <Menu.Item
        name="Applied"
        active={activeItem === "Applied"}
        onClick={() => handleClick({ activeItem: "Applied" })}
      >
        <Label color="blue">{filterJobs("Applied")}</Label>
        Applied
      </Menu.Item>
      <Menu.Item
        name="In Process"
        active={activeItem === "In Process"}
        onClick={() => handleClick({ activeItem: "In Process" })}
      >
        <Label color="green">{filterJobs("In Process")}</Label>
        In Process
      </Menu.Item>
      <Menu.Item
        name="Closed"
        active={activeItem === "Closed"}
        onClick={() => handleClick({ activeItem: "Closed" })}
      >
        <Label color="grey">{filterJobs("Closed")}</Label>
        Closed
      </Menu.Item>
      <Menu.Item
        name="Create"
        active={activeItem === "Create"}
        onClick={() => history.push("/create-job")}
      >
        <Label color="orange">Add</Label>
        Add a new job
      </Menu.Item>
    </Menu>
  );
}
