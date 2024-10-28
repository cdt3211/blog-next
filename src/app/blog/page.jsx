import React, { Suspense, lazy } from 'react'

const Categories = lazy(() => import('@/components/blog/categories'));
const PostsList = lazy(() => import('@/components/blog/postsList'));



export default function Blog() {

  return (
    <div className='flex justify-center'>
      <div>
        <div>
          <h2>Search</h2>
          <input type="text" placeholder='search' />
        </div>
        <div>
          <h2>Categories</h2>
          <Suspense fallback={<div>loading</div>}>
            <Categories />
          </Suspense>
        </div>
      </div>
      <div className='w-3/5 p-4'>
        <h1 className='text-xl font-bold'>Blog Posts</h1>
        <Suspense fallback={<div>loading</div>}>
          <PostsList />
        </Suspense>
      </div>
    </div>
  )
}
