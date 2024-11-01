import WriteForm from '@/components/write/writeForm'
import { getCategories } from '@/lib/actions/categories'
import React from 'react'

export default async function Write() {
  const categories = await getCategories();

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">创建新文章</h1>
      <WriteForm categories={categories} />
    </div>
  )
}
