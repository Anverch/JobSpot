import React, { createContext, useReducer, useContext } from "react";
// import user from "../../../controllers/user";

const testUser = {
  name: "",
  email: "",
  password: "",
  Jobs: [],
  filteredJobs: [],
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
  addJob: (job) => {},
  handleInputChange: () => {},
  handleSubmit: () => {},
};

const UserContext = createContext({
  name: "",
  email: "",
  password: "",
  Jobs: [],
  filteredJobs: [],
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
  addJob: (job) => {},
  handleInputChange: () => {},
  handleSubmit: () => {},
});

const reducer = (state, action) => {
  console.log(`action:>>`, action);
  switch (action.type) {
    case "filter": {
      return { ...state, filteredJobs: action.filteredJobs };
    }
    case "all": {
      return { ...state, filteredJobs: action.allJobs };
    }
    case "view": {
      return {
        ...state,
        activeJob: state.Jobs.find((job) => job.id === action.id),
      };
    }
    case "login" : {
      const data = action.user.data
      return {
        ...data
      }
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
