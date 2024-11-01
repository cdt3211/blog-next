import { PostSkeleton } from '@/components/blog/postSkeleton'
import PostsList from '@/components/blog/postsList'
import React, { Suspense } from 'react'


export default function Blog() {
  return (
    <div className='flex justify-center mx-auto mt-4'>
      <div>测试啊速度啦设计和开发哈师大和</div>
      <Suspense fallback={<PostSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  )
}
