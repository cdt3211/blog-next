import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models/post";

export async function GET() {
  try {
    connectToDb()
    const posts = await Post.find();
    return Response.json(posts);
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch posts");
  }
}
