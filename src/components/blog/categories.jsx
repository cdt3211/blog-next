import { getCategories } from '@/lib/actions/categories'
import React from 'react'

export default async function Categories() {
  const categories = await getCategories();
  if (!Array.isArray(categories)) {
    return <div>无法获取分类列表，请稍后再试。</div>;
  }
  return (
    <div>
      {categories.map(category => (
        <div key={category._id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  )
}
