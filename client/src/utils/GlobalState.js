import React, { createContext, useReducer, useContext } from "react";
// import user from "../../../controllers/user";


const testUser = {
  id: Math.floor(Math.random() * 1000),
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

const emily = {
  id: 3,
  name: "emily wirtz",
  email: "ememail@gmail.com",
  password: "password",
  Jobs: [
    {
      id: 1,
      companyName: "Glossier",
      jobTitle: "Software Engineer",
      salary: 90000,
      currentStatus: "In Process",
      phoneInt: "8/15/2020",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "New York",
      jobNotes: ["free makeup for life"],
    },
    {
      id: 2,
      companyName: "American Century",
      jobTitle: "Staff Backend Developer",
      salary: 120000,
      currentStatus: "Interested",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "KC",
      jobNotes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      companyName: "Google",
      jobTitle: "Java Developer",
      salary: 100000,
      currentStatus: "Applied",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "Mountain View",
      jobNotes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      companyName: "GitHub",
      jobTitle: "Software Engineer",
      salary: 95000,
      currentStatus: "In Process",
      phoneInt: "7/29/2020",
      inPersonInt: "8/5/2020",
      fullBenefits: "Yes",
      location: "Chicago",
      jobNotes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      companyName: "Intuit",
      jobTitle: "Project Manager",
      salary: 1400000,
      currentStatus: "Interested",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "SF",
      jobNotes: ["moving expenses covered", "monthly Uber credit"],
    },
  ],
  filteredJobs: [
    {
      id: 1,
      companyName: "Glossier",
      jobTitle: "Software Engineer",
      salary: 90000,
      currentStatus: "In Process",
      phoneInt: "8/15/2020",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "New York",
      jobNotes: ["free makeup for life"],
    },
    {
      id: 2,
      companyName: "American Century",
      jobTitle: "Staff Backend Developer",
      salary: 120000,
      currentStatus: "Interested",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "KC",
      jobNotes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      companyName: "Google",
      jobTitle: "Java Developer",
      salary: 100000,
      currentStatus: "Applied",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "Mountain View",
      jobNotes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      companyName: "GitHub",
      jobTitle: "Software Engineer",
      salary: 95000,
      currentStatus: "In Process",
      phoneInt: "7/29/2020",
      inPersonInt: "8/5/2020",
      fullBenefits: "Yes",
      location: "Chicago",
      jobNotes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      companyName: "Intuit",
      jobTitle: "Project Manager",
      salary: 1400000,
      currentStatus: "Interested",
      phoneInt: "",
      inPersonInt: "",
      fullBenefits: "Yes",
      location: "SF",
      jobNotes: ["moving expenses covered", "monthly Uber credit"],
    },
  ],
  newJob: {},
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
};

const UserContext = createContext({
  id: Math.floor(Math.random() * 1000),
  name: "",
  email: "",
  password: "",
  Jobs: [],
  filteredJobs: [],
  newJob: {},
  filter: ["All", "Interested", "Applied", "In Process", "Closed"],
  loggedIn: true,
  activeJob: {},
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
    case "login": {
      const data = action.user.data;
      return {
        ...data,
      };
    }
    case "submit": {
      console.log(`action:>>`, action);
      return { ...state, Jobs: [...state.Jobs, action.newJob] };
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