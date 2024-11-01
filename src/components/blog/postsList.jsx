import { fetchPosts } from '@/lib/data';
import Link from 'next/link';
import React from 'react'


export default async function PostList() {
  const posts = await fetchPosts();
  return (
    <ul className="space-y-4 w-full">
      {posts.map((post) => (
        <li key={post._id} className="p-4 border rounded hover:bg-gray-100">
          <Link href={`/blog/${post.slug}`}>
            <div className="font-bold">{post.title}</div>
            <div className='text-gray-400 text-sm'>{new Date(post.createdAt).toLocaleDateString()}</div>
          </Link>
        </li>
      ))}
    </ul>
  )
}