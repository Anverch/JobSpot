import React, { createContext, useContext } from "react";
export const JobModel = {
  company: "",
  job_title: "",
  salary: 0,
  status: "Interested",
  phone: new Date(),
  in_person_interview_date: new Date(),
  benefits: "",
  location: "",
  source: "",
  notes: "",
  Userid: "",
};

const JobContext = createContext(JobModel);

export function JobProvider({ value, children }) {
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
}

export function useJobContext() {
  return useContext(JobContext);
}
