import Link from 'next/link';
import React, { Suspense } from 'react'
import Markdown from "react-markdown";
import { fetchPostBySlug } from '@/lib/data';

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  return (
    <div className='flex flex-col items-center'>
      <div className='prose w-full'>
        <Suspense fallback={<div>loading</div>}>
          <h1>{post.title}</h1>
          {post.category && <p>{post.category.name}</p>}
          <Link href={`/write/${post._id}`}>Edit</Link>
          <p>{new Date(post.createdAt).toLocaleDateString()}</p>
          <article>
            <Markdown>{post.content}</Markdown>
          </article>
        </Suspense>
      </div>
    </div>

  )
}
