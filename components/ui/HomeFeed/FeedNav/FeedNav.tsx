import { FunctionComponent } from "react";
import classes from "./FeedNav.module.css";
import ProfileImage from "@ui/Resuable/Profile/ProfileImage/ProfileImage";
import Links from "./Links";

interface FeedNavProps {
  userImage: string;
  toggleModal: () => void;
}

const FeedNav: FunctionComponent<FeedNavProps> = ({
  userImage,
  toggleModal,
}) => {
  return (
    <nav className={classes.nav}>
      <ProfileImage
        src={userImage}
        circleDiameter="50px"
        onClick={toggleModal}
      />
      <Links />
    </nav>
  );
};
//Profile image
//Feed navigation
export default FeedNav;
