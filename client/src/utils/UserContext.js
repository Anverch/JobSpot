import React, { createContext, useContext } from "react";
export const UserModel = {
  fullName: "",
  email: "",
  password: "",
  jobs: [],
};

const UserContext = createContext(UserModel);

export function UserProvider({ value, children }) {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
