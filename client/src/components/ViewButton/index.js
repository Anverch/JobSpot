import React from "react";
import { Button } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../utils/UserContext";

export default function ViewButton(props) {
  const history = useHistory();
  const { user, setUser } = useUserContext();

  const onClick = (event) => {
    const id = props.id;
    const activeJob = user.Jobs.find((job) => job.id === id);
    setUser({ ...user, activeJob: activeJob });
    history.push(`/jobs/${id}`);
  };

  const styles = {
    fontFamily: ["Roboto Slab", "serif"],
  };

  return (
    <Button style={styles} basic color="violet" onClick={onClick}>
      View
    </Button>
  );
}
