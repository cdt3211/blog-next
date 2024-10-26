import PostsList from '@/components/post/postsList'
import React, { Suspense } from 'react'

export default function Blog() {

  return (
    <>
      <div>Blog</div>
      <Suspense fallback={<div>loading</div>}>
        <PostsList />
      </Suspense>
    </>
  )
}
