import { getPosts } from '@/lib/data'
import Link from 'next/link';
import React from 'react'

export default async function PostsList() {
  const posts = await getPosts();
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </>
  )
}
