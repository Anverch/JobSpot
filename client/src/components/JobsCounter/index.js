import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, Menu, Container, Grid } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";

export default function JobsCounter() {
  const history = useHistory();
  const [state, dispatch] = useUserContext();
  console.log(`state>>`, state);

  const filterJobs = (filter) => {
    switch (filter) {
      case "All": {
        return state.Jobs.length;
      }

      case "Interested": {
        const interested = state.Jobs.filter(
          (job) => job.status === "Interested"
        );
        return interested.length;
      }
      case "Applied": {
        const applied = state.Jobs.filter(
          (job) => job.status === "Applied"
        );
        return applied.length;
      }
      case "In Process": {
        const inProcess = state.Jobs.filter(
          (job) => job.status === "In Process"
        );
        return inProcess.length;
      }
      case "Closed": {
        const closed = state.Jobs.filter(
          (job) => job.status === "Closed"
        );
        return closed.length;
      }
      default:
        return state.Jobs.length;
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
      <Menu.Item id="job-status" name="All"
        active={activeItem === "All"}
        onClick={() => handleClick({ activeItem: "All" })}
      >All
          <Label color="teal">{filterJobs("All")}</Label>
      </Menu.Item>
      <Menu.Item id="job-status" name="Interested"
        active={activeItem === "Interested"}
        onClick={() => handleClick({ activeItem: "Interested" })}
      >Interested
          <Label color="purple">{filterJobs("Interested")}</Label>
      </Menu.Item>
      <Menu.Item id="job-status" name="Applied"
        active={activeItem === "Applied"}
        onClick={() => handleClick({ activeItem: "Applied" })}
      >Applied
          <Label color="blue">{filterJobs("Applied")}</Label>
      </Menu.Item>
      <Menu.Item id="job-status" name="In Process"
        active={activeItem === "In Process"}
        onClick={() => handleClick({ activeItem: "In Process" })}
      >In Process
          <Label color="green">{filterJobs("In Process")}</Label>
      </Menu.Item>
      <Menu.Item id="job-status" name="Closed"
        active={activeItem === "Closed"}
        onClick={() => handleClick({ activeItem: "Closed" })}
      >Closed
          <Label color="red">{filterJobs("Closed")}</Label>
      </Menu.Item>

      <Menu.Item id="job-status" name="Create"
        active={activeItem === "Create"}
        onClick={() => history.push("/create-job")}
      >New Job
          <Label color="brown">Add</Label>
      </Menu.Item>

    </Menu>
  );
}
