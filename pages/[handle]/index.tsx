import Profile from "@ui/Profile/Profile";
import useProfile from "@hooks/profile/useProfile";
import { FunctionComponent } from "react";
import classes from "./Profile.module.css";
import LoadingIcon from "@ui/Resuable/Loading/LoadingIcon";

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
  const { posts, setScrollEvent } = useProfile();
  if (!posts) {
    return <></>;
  } else {
    return <Profile posts={posts} setScrollEvent={setScrollEvent} />;
  }
};

export default ProfilePage;
