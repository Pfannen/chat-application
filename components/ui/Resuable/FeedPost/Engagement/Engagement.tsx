import { FunctionComponent, useEffect, useState } from "react";
import classes from "./Engagement.module.css";
import EComponent from "./EComponent";
import LikeIcon from "@ui/Resuable/Icons/LikeIcon";
import CommentIcon from "@ui/Resuable/Icons/CommentIcon";
import { updatePostLike } from "utils/actions";
import EditButton from "@ui/Resuable/Icons/EditButton";

interface EngagementProps {
  postId: number;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isUsersProfile?: boolean;
  editPost?: () => void;
}

const Engagement: FunctionComponent<EngagementProps> = ({
  postId,
  likeCount,
  commentCount,
  isLiked,
  isUsersProfile,
  editPost,
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [likes, setLikes] = useState(likeCount);
  const handleLike = () => {
    if (liked) {
      updatePostLike(postId, "unlike");
      setLikes((prevState) => prevState - 1);
    } else {
      updatePostLike(postId, "like");
      setLikes((prevState) => prevState + 1);
    }
    setLiked((prevState) => !prevState);
  };

  return (
    <div className={classes.engagement}>
      <EComponent
        count={likes}
        action={handleLike}
        icon={<LikeIcon liked={liked} />}
      />
      <EComponent
        count={commentCount}
        action={() => {
          console.log("IMPLMENT: BRING UP CREATE COMMENT PAGE");
        }}
        icon={<CommentIcon />}
      />
      {isUsersProfile && (
        <div className={classes.edit}>
          <EditButton onClick={editPost} />
        </div>
      )}
    </div>
  );
};

export default Engagement;
