import React, { createContext, useReducer, useContext } from "react";
import API from "../utils/API";

const testUser = {
  name: "",
  email: "",
  password: "",
  filteredJobs: [],
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
};

const UserContext = createContext({
  name: "",
  email: "",
  password: "",
  status: "Interested",
  filteredJobs: [],
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "filter": {
      if (action.data.value !== "All") {
        const filteredJobs = API.getJobs().then((jobs) =>
          jobs.data.filter((job) => job.status === action.data.value)
        );
        return { ...state, filteredJobs: filteredJobs };
      }
    }
    case "all": {
      const Jobs = API.getJobs(state.id).then((data) =>
      );
    }
    case "view": {
      return {
        ...state,
        activeJob: state.Jobs.find((job) => job.id === action.id),
      };
    }
    case "login": {
      const data = action.user.data;
      return {
        ...data,
      };
    }

    default:
      return { ...state };
  }
};

const UserProvider = ({ value = testUser, ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);
  return <UserContext.Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
