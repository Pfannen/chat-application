import Profile from "@ui/Resuable/Profile";
import { FunctionComponent } from "react";
import ProfileNav from "./ProfileNav";
import Links from "./UserDetails/Links";
import EditModal from "./EditModal/EditModal";
import useAnimateModal from "@hooks/animation/useAnimateModal";
import UserPosts from "./UserPosts/UserPosts";
import { FeedPost } from "@_types/post/feed-post";
import useUserDetails from "@hooks/profile/useUserDetails";
import useUpdateUser from "@hooks/profile/useUpdateUser";
import classes from "./Profile.module.css";
import { SetScrollEvent } from "@hooks/page-fetch/types";

interface ProfilePageProps {
  posts: FeedPost[];
  setScrollEvent: SetScrollEvent;
}

const ProfilePage: FunctionComponent<ProfilePageProps> = ({
  posts,
  setScrollEvent,
}) => {
  const { playAnimation, showModal, toggle } = useAnimateModal(300);
  const { user, isUsersProfile, setUser } = useUserDetails();
  const handleForm = useUpdateUser(setUser, toggle);
  if (user) {
    return (
      <section className={classes.profile} ref={setScrollEvent}>
        <Profile
          user={user}
          isUsersProfile={!!isUsersProfile}
          toggleEdit={toggle}
          aggregateData={
            <Links
              linkInfo={[
                {
                  href: `/${user.userHandle}/following`,
                  count: user.followingCount,
                  label: "Following",
                },
                {
                  href: `/${user.userHandle}/followers`,
                  count: user.followerCount,
                  label: "Followers",
                },
              ]}
            ></Links>
          }
        />
        <ProfileNav handle={user.userHandle} />
        <UserPosts
          posts={posts}
          isUsersProfile={!!isUsersProfile}
          user={{
            userName: user.userName,
            userHandle: user.userHandle,
            userImage: user.userImage,
          }}
        />
        {showModal && (
          <EditModal
            playAnimation={playAnimation}
            toggle={toggle}
            animationTime={300}
            userInfo={user}
            handleForm={handleForm}
          />
        )}
      </section>
    );
  }
  return <p>Show loading!</p>;
};

export default ProfilePage;
