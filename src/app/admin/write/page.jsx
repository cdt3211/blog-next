import PostForm from '@/components/post/postForm'
import Categorieslist from '@/components/write/categorieslist';
import { getCategories } from '@/lib/actions/categories'
import { addPost } from '@/lib/actions/posts'
import React, { Suspense } from 'react'

export default function Write() {

  return (
    <div className="w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">创建新文章</h1>

      <form action={addPost}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            标题
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-1">
            内容
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows="10"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            分类
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full p-2 border rounded"
          >
            <option value="">选择分类</option>
            <Suspense fallback={<option>loading</option>}>
              <Categorieslist />
            </Suspense>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium mb-1">
            标签 (用逗号分隔)
          </label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="w-full p-2 border rounded"
            placeholder="技术, 编程, Web"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          创建文章
        </button>
      </form>
    </div>
  )
}
