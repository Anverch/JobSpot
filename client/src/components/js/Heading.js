import React from "react";
import { Header } from "semantic-ui-react";
import "../css/Heading.css";

export default function Heading({ children }) {
  return (
    <Header as="h1" color="blue" textAlign="center" className="heading">
      {children}
    </Header>
  );
}
