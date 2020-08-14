import React, { createContext, useReducer, useContext } from "react";

const testUser = {
  name: "who is ryan",
  email: "whoisryan@btag.com",
  jobs: [
    {
      companyName: "Google",
      positionTitle: "president",
      salary: 500000000,
      currentStatus: "Applied",
      fullBenefits: true,
      location: "remote",
      jobNotes: "sounds pretty good",
    },
    {
      companyName: "Twitter",
      positionTitle: "software engineer",
      salary: 100000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "SF",
      jobNotes: "moving expenses covered",
    },
    {
      companyName: "Postmates",
      positionTitle: "project manager",
      salary: 125000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "LA",
      jobNotes: "4 direct reports",
    },
    {
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
      companyName: "Google",
      positionTitle: "president",
      salary: 500000000,
      currentStatus: "Applied",
      fullBenefits: true,
      location: "remote",
      jobNotes: "sounds pretty good",
    },
    {
      companyName: "Twitter",
      positionTitle: "software engineer",
      salary: 100000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "SF",
      jobNotes: "moving expenses covered",
    },
    {
      companyName: "Postmates",
      positionTitle: "project manager",
      salary: 125000,
      currentStatus: "Interested",
      fullBenefits: true,
      location: "LA",
      jobNotes: "4 direct reports",
    },
    {
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
