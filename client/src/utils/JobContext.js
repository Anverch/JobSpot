import React, { createContext, useContext } from "react";
export const JobModel = {
  companyName: "",
  positionTitle: "",
  yearlySalary: 0,
  currentStatus: "interested",
  phoneInterview: new Date(),
  inPersonInterview: new Date(),
  fullBenefits: false,
  location: "",
  jobNotes: "",
};

const JobContext = createContext(JobModel);

export function JobProvider({ value, children }) {
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJobContext() {
  return useContext(JobContext);
}
