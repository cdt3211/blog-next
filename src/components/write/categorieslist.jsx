import { getCategories } from '@/lib/actions/categories'
import React from 'react'

export default async function Categorieslist() {
  const categories = await getCategories();
  return (
    <>
      {categories.map(category => (
        <option key={category._id} value={category._id.toString()}>
          {category.name}
        </option>
      ))}
    </>
  )
}
