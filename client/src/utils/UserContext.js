import React, { createContext, useContext } from "react";
export const UserModel = {
  fullName: "",
  email: "",
  password: "",
  jobs: [],
  addJob: (job) => {},
  handleInputChange: () => {},
  handleSubmit: () => {},

};

const UserContext = createContext(UserModel);

export function UserProvider({ value, ...props }) {
  return <UserContext.Provider value={value} {...props} />;

}

export function useUserContext() {
  return useContext(UserContext);
}
