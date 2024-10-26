'use server'

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

export async function addPost(formData) {
  const { title, category, content } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      category,
      content
    })
    await newPost.save();
    revalidatePath('/blog');
  } catch (err) {
    console.error(err);
    return { error: 'Failed to add post' };
  }
}

export async function updatePost(formData) {
  const { id, title, category, content } = Object.fromEntries(formData);
  try {
    connectToDb();
    const post = await Post.findById(id);
    if (!post) {
      return { error: 'Post not found' };
    }
    post.title = title;
    post.category = category;
    post.content = content;
    await post.save();
    revalidatePath('/blog');
    revalidatePath(`/blog/${id}`);
  } catch (err) {
    console.error(err);
    return { error: 'Failed to update post' };
  }
}