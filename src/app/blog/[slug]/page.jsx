import DeletePostButton from '@/components/post/deletePost';
import { getPost } from '@/lib/actions/posts'
import Link from 'next/link';
import React, { Suspense } from 'react'
import Markdown from "react-markdown";

export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return (
    <div className='flex flex-col items-center'>
      <div className='prose w-full'>
        <Suspense fallback={<div>loading</div>}>
          <h1>{post.title}</h1>
          {post.category && <p>#{post.category.name}</p>}
          <Link href={`/write/${post._id}`}>Edit</Link>
          {/* <DeletePostButton postId={post._id} /> */}
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          <article>
            <Markdown>{post.content}</Markdown>
          </article>
        </Suspense>
      </div>
    </div>

  )
}
