import { Post } from "./models/post"
import { Category } from "./models/category";

export async function fetchPosts() {
  try {
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch posts");
  }
};

export async function fetchPostBySlug(slug) {
  try {
    const post = await Post.findOne({ slug }).populate('category').lean()
    return post;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch post");
  }
}