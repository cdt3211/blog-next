'use client'
import { getCategories } from '@/lib/actions/categories'
import React from 'react'

export default function Categorieslist() {
  return (
    <>
      <select>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  )
}
