import React, { createContext, useReducer, useContext } from "react";

const testUser = {
  fullName: "who is ryan",
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
  loggedIn: true,
  // handleInputChange: (e) => {
  //   console.log(`e.target:>>`, e.target);
  //   const { name, value } = e.target;
  //   setUser({ [name]: value });
  // },
  // handleSubmit: (e) => {
  //   e.preventDefault();
  //   console.log(`e:>>`, e);
  // },
};

const UserContext = createContext({
  fullName: "",
  email: "",
  password: "",
  jobs: [],
  addJob: (job) => {},
  handleInputChange: () => {},
  handleSubmit: () => {},
});

// const JobContext = createContext({
//   companyName: "",
//   //   positionTitle: "",
//   //   salary: 0,
//   //   currentStatus: "interested",
//   //   phoneInterview: new Date(Date.now()),
//   //   inPersonInterview: new Date(Date.now()),
//   //   fullBenefits: false,
//   //   location: "",
//   //   jobNotes: "",
// })

const reducer = (state, action) => {
  // console.log(`state:>>`, state);
  // const { user } = state;
  // console.log(`user:>>`, user);
  switch (action.type) {
    case "filter": {
      return state.jobs.filter(
        (job, name) => job.currentStatus === action.name
      );
    }
    default:
      return state;
  }
};

const UserProvider = ({ value = testUser, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { user: value });
  return <UserContext.Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
