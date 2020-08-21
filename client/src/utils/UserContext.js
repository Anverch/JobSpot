import React, { createContext, useContext, useState } from "react";
export const useUserModel = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    Jobs: [],
    filteredJobs: [],
    filter: {},
    activeJob: {},
    id: "",
  });
  return {
    setUser: ({
      name,
      email,
      password,
      Jobs,
      filteredJobs,
      filter,
      activeJob,
      id,
    }) =>
      setUser({
        name,
        email,
        password,
        Jobs,
        filteredJobs,
        filter,
        activeJob,
        id,
      }),
    user: user,
  };
};

const UserContext = createContext([null, () => {}]);

export function UserProvider({ value, ...props }) {
  return <UserContext.Provider value={value} {...props} />;
}

export function useUserContext() {
  return useContext(UserContext);
}
