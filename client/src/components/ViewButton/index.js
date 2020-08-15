import React from "react";
import { Button } from "semantic-ui-react";
import { useUserContext } from "../../utils/GlobalState";

export default function UpdateButton(props) {
  const [state, dispatch] = useUserContext();
  console.log(`state:>>`, state);
  const onClick = (event) => {
    console.log(`props.id:>>`, props.id);
    const id = props.id;
    dispatch({ type: "view", id });
    console.log(`state:>>`, state);
  };

  return (
    <Button color="yellow" onClick={onClick}>
      View
    </Button>
  );
}
