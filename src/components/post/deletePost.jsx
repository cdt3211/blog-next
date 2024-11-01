'use client'
import { deletePost } from '@/lib/actions/postsActions'
import React from 'react'

export default function DeletePostButton({ postId }) {
  return (
    <>
      <button onClick={() => { deletePost(postId) }}>Delete</button></>
  )
}
