import React, { Suspense, lazy } from 'react'

const PostsList = lazy(() => import('@/components/blog/postsList'));



export default function Blog() {

  return (
    <div className='flex justify-center'>
      <div className='w-3/5 p-4'>
        <h1 className='text-xl font-bold'>Blog Posts</h1>
        <Suspense fallback={<div>loading</div>}>
          <PostsList />
        </Suspense>
      </div>
    </div>
  )
}
