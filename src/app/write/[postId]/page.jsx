import PostForm from '@/components/post/postForm';
import { updatePost } from '@/lib/action'
import { getPostById } from '@/lib/data';
import React from 'react'

export default async function Edit({ params }) {
  const { postId } = await params;
  const post = await getPostById(postId);
  const initialValues = { title: post.title, category: post.category, content: post.content, id: postId };

  return (
    <div>
      <PostForm initialValues={initialValues} onSubmit={updatePost} />
    </div>
  )
}
