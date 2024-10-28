import { addCategory } from '@/lib/actions/categories'
import React from 'react'

export default function Test() {
  return (
    <div>
      <form action={addCategory}>
        <input type="text" name="name" placeholder='分类名' />
        <button type='submit'>添加</button>
      </form>
    </div>
  )
}
