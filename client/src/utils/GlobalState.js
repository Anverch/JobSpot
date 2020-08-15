import React, { createContext, useReducer, useContext } from "react";

const testUser = {
  name: "who is ryan",
  email: "whoisryan@btag.com",
  jobs: [
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Google",
      positionTitle: "president",
      salary: 500000000,
      currentStatus: "Applied",
      fullBenefits: true,
      location: "remote",
      jobNotes: "sounds pretty good",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Twitter",
      positionTitle: "software engineer",
      salary: 100000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "SF",
      jobNotes: "moving expenses covered",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Postmates",
      positionTitle: "project manager",
      salary: 125000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "LA",
      jobNotes: "4 direct reports",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Microsoft",
      positionTitle: "bing consultant",
      salary: 100000,
      currentStatus: "Closed",
      fullBenefits: false,
      location: "remote",
      jobNotes: "bing no",
    },
  ],
  filteredJobs: [
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Google",
      positionTitle: "president",
      salary: 500000000,
      currentStatus: "Applied",
      fullBenefits: true,
      location: "remote",
      jobNotes: "sounds pretty good",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Twitter",
      positionTitle: "software engineer",
      salary: 100000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "SF",
      jobNotes: "moving expenses covered",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Postmates",
      positionTitle: "project manager",
      salary: 125000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "LA",
      jobNotes: "4 direct reports",
    },
    {
      id: Math.floor(Math.random() * 1000000),
      companyName: "Microsoft",
      positionTitle: "bing consultant",
      salary: 100000,
      currentStatus: "Closed",
      fullBenefits: false,
      location: "remote",
      jobNotes: "bing no",
    },
  ],
  filter: "All",
  loggedIn: true,
  currentView: {},
  handleInputChange: (e) => {
    console.log(`e.target:>>`, e.target);
    const { name, value } = e.target;
    // setUser({ [name]: value });
  },
  handleSubmit: (e) => {
    e.preventDefault();
    console.log(`e:>>`, e);
  },
};

const UserContext = createContext({
  name: "",
  email: "",
  password: "",
  jobs: [],
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
        activeJob: state.jobs.find((job) => job.id === action.id),
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
