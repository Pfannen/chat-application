import { SessionToken } from "@_types/auth";
import FeedPost from "models/FeedPost";
import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";
import { createError, getUserSession } from "../utils";
const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const session = await getUserSession(req);
      const { postId, action } = req.body;
      if (action === "like" || action === "unlike") {
        await FeedPost.like(postId, session.user.userId, action);
        res.status(200).json({ message: `Like ${action}d` });
      } else {
        res.status(400).json({ message: "invalid request" });
      }
    } else {
      return res.status(400).json({ message: "Invalid method" });
    }
  } catch (error: any) {
    if (!error.statusCode) error.statusCode = 500;
    return res.status(error.statusCode).json({ message: error.message });
  }
};
export default handler;
