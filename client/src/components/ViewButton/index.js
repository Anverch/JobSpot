import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../utils/GlobalState";

export default function ViewButton(props) {
  const history = useHistory();
  const [state, dispatch] = useUserContext();
  console.log(`state:>>`, state);
  const onClick = (event) => {
    console.log(`props>>`, props);
    const id = props.id;
    const activeJob = state.jobs.find((job) => job.id === id);
    console.log(`activeJob:>>`, activeJob);
    dispatch({ type: "view", id });
    console.log(`state:>>`, state);
    history.push(`/jobs/${id}`);
  };

  return (
    <Button color="yellow" onClick={onClick}>
      View
    </Button>
  );
}
