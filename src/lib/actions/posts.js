'use server'

import { revalidatePath } from "next/cache";
import { Post } from "../models/post";
import { connectToDb } from "../utils";
import { redirect } from "next/navigation";
import { Category } from "../models/category";

// 添加文章
export async function addPost(formData) {
  try {
    await connectToDb();
    const newPost = new Post({
      title: formData.get('title'),
      content: formData.get('content'),
      category: formData.get('category'),
      tags: formData.get('tags').split(',').map(tag => tag.trim()),
      status: formData.get('status') || 'draft'
    })
    await newPost.save();
    revalidatePath('/blog');
  } catch (err) {
    console.error(err);
    return { error: 'Failed to add post' };
  }
  redirect(`/blog`);
}

export async function updatePost(postId, formData) {
  try {
    await connectToDb();

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
    revalidatePath(`/blog/${id}`);
  } catch (err) {
    console.error(err);
    return { error: 'Failed to update post' };
  }
  redirect(`/blog/${id}`);
}

export async function deletePost(postId) {
  try {
    await connectToDb();

    const post = await Post.findByIdAndDelete(postId)

    if (!post) {
      return { success: false, error: '文章不存在' }
    }

    revalidatePath('/blog');
  } catch (err) {
    console.error(err);
    return { error: 'Failed to delete post' };
  }
  redirect(`/blog`);
}

// 获取单篇文章
export async function getPost(slug) {
  try {
    await connectToDb()

    const post = await Post
      .findOne({ slug })
      .populate('category')
      .lean()

    if (!post) {
      return { success: false, error: '文章不存在' }
    }

    return post
  } catch (error) {
    console.error('获取文章失败:', error)
    return { success: false, error: '获取文章失败' }
  }
}

// 获取文章列表
export async function getPosts() {
  try {
    await connectToDb()
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.error(err);
    throw new Error("failed to fetch posts");
  }
}