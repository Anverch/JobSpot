import React from "react";
import { Button } from "semantic-ui-react";

export default function UpdateButton(props) {
  const onClick = (event) => {
    console.log(`event:>>`, event);
    console.log(`props:>>`, props);
    console.log(`props.id:>>`, props.id);
  };

  return (
    <Button color="yellow" onClick={onClick}>
      View
    </Button>
  );
}
