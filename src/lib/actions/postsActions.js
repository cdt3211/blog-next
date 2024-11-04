'use server'

import { revalidatePath } from "next/cache";
import { Post } from "../models/post";
import { connectToDb } from "../connectToDb";
import { redirect } from "next/navigation";


connectToDb();

// 添加文章
export const addPost = async (formData) => {
  try {
    const newPost = new Post({
      title: formData.title,
      content: formData.content,
      category: formData.category,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      status: formData.status || 'draft'
    })
    await newPost.save();
    revalidatePath('/blog');
    return { success: true };
  } catch (err) {
    console.error(err);
    return { error: 'Failed to add post' };
  }
}

export async function updatePost(postId, formData) {
  try {
    const updateData = {
      title: formData.get('title'),
      content: formData.get('content'),
      summary: formData.get('summary'),
      category: formData.get('category'),
      tags: formData.get('tags').split(',').map(tag => tag.trim()),
      status: formData.get('status') || 'draft'
    }
    const post = await Post.findByIdAndUpdate(
      postId,
      updateData,
      { new: true, runValidators: true }
    )
    if (!post) {
      return { success: false, error: '文章不存在' }
    }
    revalidatePath('/blog');
    revalidatePath(`/blog/${postId}`);
  } catch (err) {
    console.error(err);
    return { error: 'Failed to update post' };
  }
  redirect(`/blog/${id}`);
}

export async function deletePost(postId) {
  try {
    const post = await Post.findByIdAndDelete(postId)
    if (!post) {
      return { success: false, error: '文章不存在' }
    }
    revalidatePath('/blog');
    redirect(`/blog`);
  } catch (err) {
    console.error(err);
    return { error: 'Failed to delete post' };
  }
}
