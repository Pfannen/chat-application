import { ConnectionsDetails } from "@_types/user";
import { FunctionComponent } from "react";
import UserBlock from "@ui/Resuable/UserBlock/UserBlock";
import classes from "components/ui/Connections/Connections.module.css";
import FollowButton from "./FollowButton";

interface ConnectionsProps {
  users: ConnectionsDetails[];
  heading?: string;
}

const Connections: FunctionComponent<ConnectionsProps> = ({
  users,
  heading,
}) => {
  console.log("users", users);
  return (
    <>
      <h1 className={classes.heading}>{heading}</h1>
      {users.map((user) => {
        return (
          <UserBlock
            user={user}
            button={
              <FollowButton
                userId={user.userId || 0}
                isFollowing={
                  user.isFollowing === undefined ? true : user.isFollowing === 1
                }
              />
            }
          />
        );
      })}
    </>
  );
};

export default Connections;
