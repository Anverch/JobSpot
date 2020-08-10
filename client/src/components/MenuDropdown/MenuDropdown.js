import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";
import "./MenuDropdown.css";

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
  },
  {
    key: "Add New",
    text: "Add new job",
    value: "Add New",
    image: "plus",
  },
  {
    key: "Sign out",
    text: "Sign out",
    value: "Sign out",
    image: "sign out",
  },
];

export default function MenuDropdown() {
  return (
    <>
      <span>
        {" "}
        <Dropdown
          options={menuOptions}
          defaultValue={menuOptions[0].value}
          id="menu"
          icon={menuOptions.image}
        />
      </span>
    </>
  );
}
