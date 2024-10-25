import { addPost } from '@/lib/action'
import React from 'react'

export default function Write() {
  return (
    <div>
      <h1>Write</h1>
      <form action={addPost}>
        <input type="text" placeholder='title' name='title' />
        <input type="text" placeholder='category' name='category' />
        <textarea type="text" name="content" cols="30" rows="10"></textarea>
        <button>Publish</button>
      </form>
    </div>
  )
}
