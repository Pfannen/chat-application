import { useQuery } from "@tanstack/react-query";
import { UserProfile } from "@_types/user/profile";
import { useRouter } from "next/router";
import { UserDetails } from "@_types/user";
import { FeedPost } from "@_types/post/feed-post";
import usePageFetch from "@hooks/page-fetch/usePageFetch";

const useProfile = () => {
  const router = useRouter();
  let handle = "";
  if (router.query.handle) {
    handle = router.query.handle as string;
  }
  console.log("ROUTER", router.query);
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["profile", handle],
  //   queryFn: fetchPosts.bind(null, handle),
  // });

  const fetchPosts = async (
    page: number,
    date: string
  ): Promise<FeedPost[] | null> => {
    if (handle) {
      const url = `/api/user/${handle}?page=${page}&date=${date}`;
      const res = await fetch(url);
      if (res.ok) {
        const data = (await res.json()) as { posts: FeedPost[] };
        return data.posts;
      } else {
        throw new Error("No profile found");
      }
    }
    console.log("undef");
    return null;
  };
  const { resetPageContent, pageContent, scrollElement } = usePageFetch(
    fetchPosts,
    true,
    10,
    handle
  );
  console.log({ pageContent });
  return { posts: pageContent, scrollElement };
};

type Profile = { user: UserProfile; isUsersProfile: boolean };
export default useProfile;
