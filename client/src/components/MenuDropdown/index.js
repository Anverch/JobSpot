import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import "./MenuDropdown.css";
import { useUserContext } from "../../utils/GlobalState";

const menuOptions = [
  {
    key: "Username",
    text: "Username",
    value: "Username",
    image: "user circle",
  },
  {
    key: "Dashboard",
    text: "Dashboard",
    value: "Dashboard",
    image: "dashboard",
    href: "/home",
  },
  {
    key: "Add New",
    text: "Add new job",
    value: "Add New",
    image: "plus",
    href: "/create-job",
  },
  {
    key: "Sign out",
    text: "Sign out",
    value: "Sign out",
    image: "sign out",
  },
];

export default function MenuDropdown() {
  const { user } = useUserContext();
  return (
    <>
      <span>
        {" "}
        <Dropdown
          options={menuOptions}
          defaultValue={user.email}
          id="menu"
          icon={menuOptions.image}
        />
      </span>
    </>
  );
}
