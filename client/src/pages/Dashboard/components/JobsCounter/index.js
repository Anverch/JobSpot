import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Label, Menu, Container } from "semantic-ui-react";
import { useUserContext } from "../../../../utils/UserContext";
import API from "../../../../utils/API";

const styles = {
  jobsCounter: {
    background: "#ff9f29",
    width: "80%",
    padding: "5px",
    marginBottom: "10px",
  },
  container: {
    width: "60%",
  },
  headerStyle: {
    justifyContent: "center",
    width: "80%",
  },
  menuItemStyle: {
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: ["Roboto Slab", "serif"],
  },
  labelStyle: {
    color: "black",
    fontSize: 18,
  },
};
export default function JobsCounter() {
  const history = useHistory();
  const { user, setUser } = useUserContext();
  const [activeItem, setActiveItem] = useState({
    activeItem: "",
  });

  const handleClick = async ({ activeItem }) => {
    switch (activeItem) {
      case "All": {
        let allJobs = await API.getJobs();
        setUser({ ...user, filteredJobs: allJobs.data, filter: activeItem });
        history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
        break;
      }
      case "Interested": {
        let userJobs = await API.getJobsInterested(user.id);
        setUser({ ...user, filteredJobs: userJobs.data, filter: activeItem });
        history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
        break;
      }
      case "Applied": {
        let userJobs = await API.getJobsApplied(user.id);
        setUser({ ...user, filteredJobs: userJobs.data, filter: activeItem });
        history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
        break;
      }
      case "In Process": {
        let userJobs = await API.getJobsInProcess(user.id);
        setUser({ ...user, filteredJobs: userJobs.data, filter: activeItem });
        history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
        break;
      }
      case "Closed": {
        let userJobs = await API.getJobsClosed(user.id);
        setUser({ ...user, filteredJobs: userJobs.data, filter: activeItem });
        history.push(`/view?filter=${activeItem.replace(" ", "-")}`);
        break;
      }
      default: {
        return;
      }
    }
  };
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

  return (
    <Container fluid style={styles.container}>
      <Menu fluid vertical style={styles.jobsCounter}>
        <Menu.Item
          style={styles.menuItemStyle}
          name="All"
          active={activeItem === "All"}
          onClick={() => handleClick({ activeItem: "All" })}
        >
          All
          <Label style={styles.labelStyle} color="teal">
            {filterJobs("All")}
          </Label>
        </Menu.Item>
        <Menu.Item
          style={styles.menuItemStyle}
          name="Interested"
          active={activeItem === "Interested"}
          onClick={() => handleClick({ activeItem: "Interested" })}
        >
          Interested
          <Label style={styles.labelStyle} color="purple">
            {filterJobs("Interested")}
          </Label>
        </Menu.Item>
        <Menu.Item
          style={styles.menuItemStyle}
          name="Applied"
          active={activeItem === "Applied"}
          onClick={() => handleClick({ activeItem: "Applied" })}
        >
          Applied
          <Label style={styles.labelStyle} color="blue">
            {filterJobs("Applied")}
          </Label>
        </Menu.Item>
        <Menu.Item
          style={styles.menuItemStyle}
          name="In Process"
          active={activeItem === "In Process"}
          onClick={() => handleClick({ activeItem: "In Process" })}
        >
          In Process
          <Label style={styles.labelStyle} color="green">
            {filterJobs("In Process")}
          </Label>
        </Menu.Item>
        <Menu.Item
          style={styles.menuItemStyle}
          name="Closed"
          active={activeItem === "Closed"}
          onClick={() => handleClick({ activeItem: "Closed" })}
        >
          Closed
          <Label style={styles.labelStyle} color="red">
            {filterJobs("Closed")}
          </Label>
        </Menu.Item>
        <Menu.Item
          style={styles.menuItemStyle}
          name="Create"
          active={activeItem === "Create"}
          onClick={() => history.push("/create-job")}
        >
          New Job
          <Label style={styles.labelStyle} color="yellow">
            Add
          </Label>
        </Menu.Item>
      </Menu>
    </Container>
  );
}
