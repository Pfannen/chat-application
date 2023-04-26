import useFollow from "@hooks/profile/useFollow";
import Connections from "@ui/Connections/Connections";
import { FunctionComponent } from "react";
import classes from "./FollowersPage.module.css";

const FollowersPage: FunctionComponent = () => {
  const { data, setScrollEvent } = useFollow("followers");
  if (data) {
    return (
      <Connections
        users={data}
        heading="Followers"
        setScrollEvent={setScrollEvent}
      />
    );
  }
  return <></>;
};

export default FollowersPage;
