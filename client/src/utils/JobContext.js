import React, { createContext, useContext } from "react";
export const JobModel = {
  companyName: "",
  jobTitle: "",
  salary: 0,
  currentStatus: "interested",
  phoneInt: new Date(),
  inPersonInt: new Date(),
  fullBenefits: "",
  location: "",
  jobNotes: [],
};

const JobContext = createContext(JobModel);

export function JobProvider({ value, children }) {
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJobContext() {
  return useContext(JobContext);
}
