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
      company: "Glossier",
      job_title: "Software Engineer",
      salary: 90000,
      status: "In Process",
      phone: "8/15/2020",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "New York",
      notes: ["free makeup for life"],
    },
    {
      id: 2,
      company: "American Century",
      job_title: "Staff Backend Developer",
      salary: 120000,
      status: "Interested",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "KC",
      notes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      company: "Google",
      job_title: "Java Developer",
      salary: 100000,
      status: "Applied",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "Mountain View",
      notes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      company: "GitHub",
      job_title: "Software Engineer",
      salary: 95000,
      status: "In Process",
      phone: "7/29/2020",
      in_person_interview_date: "8/5/2020",
      benefits: "Yes",
      location: "Chicago",
      notes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      company: "Intuit",
      job_title: "Project Manager",
      salary: 1400000,
      status: "Interested",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "SF",
      notes: ["moving expenses covered", "monthly Uber credit"],
    },
  ],
  filteredJobs: [
    {
      id: 1,
      company: "Glossier",
      job_title: "Software Engineer",
      salary: 90000,
      status: "In Process",
      phone: "8/15/2020",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "New York",
      notes: ["free makeup for life"],
    },
    {
      id: 2,
      company: "American Century",
      job_title: "Staff Backend Developer",
      salary: 120000,
      status: "Interested",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "KC",
      notes: ["on-site gym", "WFH"],
    },
    {
      id: 3,
      company: "Google",
      job_title: "Java Developer",
      salary: 100000,
      status: "Applied",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "Mountain View",
      notes: ["on-site gym", "on-site cafeteria", "monthly Uber credit"],
    },
    {
      id: 4,
      company: "GitHub",
      job_title: "Software Engineer",
      salary: 95000,
      status: "In Process",
      phone: "7/29/2020",
      in_person_interview_date: "8/5/2020",
      benefits: "Yes",
      location: "Chicago",
      notes: ["25 days of PTO per year"],
    },
    {
      id: 5,
      company: "Intuit",
      job_title: "Project Manager",
      salary: 1400000,
      status: "Interested",
      phone: "",
      in_person_interview_date: "",
      benefits: "Yes",
      location: "SF",
      notes: ["moving expenses covered", "monthly Uber credit"],
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