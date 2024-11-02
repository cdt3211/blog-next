import { PostSkeleton } from '@/components/blog/postSkeleton'
import PostsList from '@/components/blog/postsList'
import React, { Suspense } from 'react'


export default function Blog() {
  return (
    <div className='flex justify-center mx-auto mt-4'>
      <Suspense fallback={<PostSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  )
}
