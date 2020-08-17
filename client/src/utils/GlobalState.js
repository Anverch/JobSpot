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

const emily = {
  name: "emily wirtz",
  email: "ememail@gmail.com",
  password: "password",
  Jobs: [
    {
      id: 1,
      companyName: "Glossier",
      jobTitle: "Software Engineer",
      yearlySalary: 90000,
      currentStatus: "In Process",
      phoneInterview: "8/15/2020",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "New York",
      jobNotes: ["free makeup for life"],
    },
    {
      id: 2,
      companyName: "American Century",
      jobTitle: "Staff Backend Developer",
      yearlySalary: 120000,
      currentStatus: "Interested",
      phoneInterview: "",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "KC",
      jobNotes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      companyName: "Google",
      jobTitle: "Java Developer",
      yearlySalary: 100000,
      currentStatus: "Applied",
      phoneInterview: "",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "Mountain View",
      jobNotes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      companyName: "GitHub",
      jobTitle: "Software Engineer",
      yearlySalary: 95000,
      currentStatus: "In Process",
      phoneInterview: "7/29/2020",
      inPersonInterview: "8/5/2020",
      fullBenefits: "Yes",
      location: "Chicago",
      jobNotes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      companyName: "Intuit",
      jobTitle: "Project Manager",
      yearlySalary: 1400000,
      currentStatus: "Interested",
      phoneInterview: "",
      inPersonInterview: "",
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
      yearlySalary: 90000,
      currentStatus: "In Process",
      phoneInterview: "8/15/2020",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "New York",
      jobNotes: ["free makeup for life"],
    },
    {
      id: 2,
      companyName: "American Century",
      jobTitle: "Staff Backend Developer",
      yearlySalary: 120000,
      currentStatus: "Interested",
      phoneInterview: "",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "KC",
      jobNotes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      companyName: "Google",
      jobTitle: "Java Developer",
      yearlySalary: 100000,
      currentStatus: "Applied",
      phoneInterview: "",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "Mountain View",
      jobNotes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      companyName: "GitHub",
      jobTitle: "Software Engineer",
      yearlySalary: 95000,
      currentStatus: "In Process",
      phoneInterview: "7/29/2020",
      inPersonInterview: "8/5/2020",
      fullBenefits: "Yes",
      location: "Chicago",
      jobNotes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      companyName: "Intuit",
      jobTitle: "Project Manager",
      yearlySalary: 1400000,
      currentStatus: "Interested",
      phoneInterview: "",
      inPersonInterview: "",
      fullBenefits: "Yes",
      location: "SF",
      jobNotes: ["moving expenses covered", "monthly Uber credit"],
    },
  ],
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