import { getPostById } from '@/lib/data'
import React from 'react'

export default async function Post({ params }) {
  const { postId } = await params;
  const post = await getPostById(postId);
  console.log(post)
  return (
    <>
      <div className='container'>Post</div>
      <h1>{post.title}</h1>
      {post.body}
    </>

  )
}
