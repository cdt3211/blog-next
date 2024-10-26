import PostForm from '@/components/postForm'
import { addPost } from '@/lib/action'
import React from 'react'

export default function Write() {
  const initialValues = { title: '', category: '', content: '' };

  return (
    <div>
      <PostForm initialValues={initialValues} onSubmit={addPost} />
    </div>
  )
}
