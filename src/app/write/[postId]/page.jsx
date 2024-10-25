import { updatePost } from '@/lib/action'
import { getPostById } from '@/lib/data';
import React from 'react'

export default async function Edit({ params }) {
  const { postId } = await params;
  const post = await getPostById(postId);

  return (
    <div>
      <h1>Edit</h1>
      <form action={updatePost}>
        <input type="hidden" name='_id' value={postId} />
        <input type="text" placeholder='title' name='title' defaultValue={post.title} />
        <input type="text" placeholder='category' name='category' defaultValue={post.category} />
        <textarea type="text" name="content" cols="30" rows="10" defaultValue={post.content}></textarea>
        <button>Publish</button>
      </form>
    </div>
  )
}
