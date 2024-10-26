import DeletePostButton from '@/components/post/deletePost';
import { deletePost } from '@/lib/action';
import { getPostById } from '@/lib/data'
import Link from 'next/link';
import React from 'react'

export default async function Post({ params }) {
  const { postId } = await params;
  const post = await getPostById(postId);
  return (
    <div className='flex flex-col items-center'>
      <div className='prose w-full'>
        <h1>{post.title}</h1>
        {post.category && <p>#{post.category}</p>}
        <Link href={`/write/${postId}`}>Edit</Link>
        <DeletePostButton postId={postId} />
        <p>{new Date(post.createdAt).toLocaleDateString()}</p>
        <article>
          {post.content}
        </article>
      </div>
    </div>

  )
}
