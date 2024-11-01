'use client'
import { addPost } from '@/lib/actions/postsActions';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from "react-dom";


export default function WriteForm({ categories }) {
  const [state, formAction] = useFormState(addPost, undefined)
  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/blog')
  }, [state?.success, router]);

  return (
    <form className='flex flex-col space-y-4' action={formAction}>
      <input type="text" placeholder='title' name='title' />
      <textarea placeholder='content' name='content'></textarea>
      <select name='category'>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input type="text" placeholder='tags' name='tags' />
      <button>Submit</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  )
}
