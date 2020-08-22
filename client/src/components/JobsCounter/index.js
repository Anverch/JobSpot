import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Label, Menu, Container } from "semantic-ui-react";
import API from "../../utils/API";
import { useUserContext } from "../../utils/UserContext";
import "./styles.css";

const styles = {
  jobsCounter: {
    background: "#F28705",
    width: "80%",
    padding: "5px",
    marginBottom: "10px"
  },
  container: {
    width: "80%",

  },
  headerStyle: {
    justifyContent: "center",
    width: "80%"
  },
  menuItemStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Times New Roman"
  },
  labelStyle: {
    color: "black",
    fontSize: 18
  }
}
export default function JobsCounter() {
  const history = useHistory();
  // creating state object for jobs
  const { user } = useUserContext();
  //retrieve data from database and set to state
  // useEffect(() => {
  //   API.getJobs().then((res) => setJobs(res.data));
  // }, {});

  const filterJobs = (filter) => {
    switch (filter) {
      case "All": {
        return user.Jobs.length;
      }
      case "Interested": {
        const interested = user.Jobs.filter(
          (job) => job.status === "Interested"
        );
        return interested.length;
      }
      case "Applied": {
        const applied = user.Jobs.filter((job) => job.status === "Applied");
        return applied.length;
      }
      case "In Process": {
        const inProcess = user.Jobs.filter(
          (job) => job.status === "In Process"
        );
        return inProcess.length;
      }
      case "Closed": {
        const closed = user.Jobs.filter((job) => job.status === "Closed");
        return closed.length;
      }
      default:
        return user.Jobs.length;
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
    <Container className="bg-img" fluid style={styles.container}>
      <Menu fluid vertical style={styles.jobsCounter}>
        <Menu.Item style={styles.menuItemStyle}
          id="job-status-all"
          name="All"
          active={activeItem === "All"}
          onClick={() => handleClick({ activeItem: "All" })}
        >
          All
          <Label style={styles.labelStyle} color="teal">{filterJobs("All")}</Label>
        </Menu.Item>
        <Menu.Item style={styles.menuItemStyle}
          id="job-status-interested"
          name="Interested"
          active={activeItem === "Interested"}
          onClick={() => handleClick({ activeItem: "Interested" })}
        >
          Interested
          <Label style={styles.labelStyle} color="purple">{filterJobs("Interested")}</Label>
        </Menu.Item>
        <Menu.Item style={styles.menuItemStyle}
          id="job-status-applied"
          name="Applied"
          active={activeItem === "Applied"}
          onClick={() => handleClick({ activeItem: "Applied" })}
        >
          Applied
          <Label style={styles.labelStyle} color="blue">{filterJobs("Applied")}</Label>
        </Menu.Item>
        <Menu.Item style={styles.menuItemStyle}
          id="job-status-inProcess"
          name="In Process"
          active={activeItem === "In Process"}
          onClick={() => handleClick({ activeItem: "In Process" })}
        >
          In Process
          <Label style={styles.labelStyle} color="green">{filterJobs("In Process")}</Label>
        </Menu.Item>
        <Menu.Item style={styles.menuItemStyle}
          id="job-status-closed"
          name="Closed"
          active={activeItem === "Closed"}
          onClick={() => handleClick({ activeItem: "Closed" })}
        >
          Closed
          <Label style={styles.labelStyle} color="red">{filterJobs("Closed")}</Label>
        </Menu.Item>

        <Menu.Item style={styles.menuItemStyle}
          id="job-status-create"
          name="Create"
          active={activeItem === "Create"}
          onClick={() => history.push("/create-job")}
        >
          New Job
          <Label style={styles.labelStyle} color="brown">Add</Label>
        </Menu.Item>
      </Menu>
    </Container>
  );
}
