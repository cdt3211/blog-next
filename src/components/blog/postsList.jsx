import { getPosts } from '@/lib/actions/posts';
import Link from 'next/link';
import React from 'react'

export default async function PostsList() {
  const posts = await getPosts();
  if (!Array.isArray(posts)) {
    return <div>无法获取帖子列表，请稍后再试。</div>;
  }
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </>
  )
}
