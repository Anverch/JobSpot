import React from "react";
import { Header } from "semantic-ui-react";

export default function Header({ children }) {
  return (
    <Header as="h1" color="orange" textAlign="center">
      {children}
    </Header>
  );
}
