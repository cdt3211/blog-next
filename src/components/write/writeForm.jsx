'use client'
import { addPost } from '@/lib/actions/postsActions';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import dynamic from 'next/dynamic';

// 动态加载 MdEditor 组件，仅在客户端渲染
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), { ssr: false });
import "react-markdown-editor-lite/lib/index.css";


export default function WriteForm({ categories }) {
  const [markdownContent, setMarkdownContent] = useState("");
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: ''
  });
  const [state, setState] = useState({ success: false, error: null });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditorChange = ({ html, text }) => {
    setMarkdownContent(text);
    setFormData((prevData) => ({
      ...prevData,
      content: text
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.category) {
      setState({ success: false, error: 'Category is required' });
      return;
    }
    try {
      await addPost(formData);
      setState({ success: true, error: null });
    } catch (error) {
      setState({ success: false, error: error.message });
    }
  };

  useEffect(() => {
    if (state.success) {
      router.push('/blog');
    }
  }, [state.success, router]);

  return (
    <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='title'
        name='title'
        value={formData.title}
        onChange={handleChange}
      />
      <select
        name='category'
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder='tags'
        name='tags'
        value={formData.tags}
        onChange={handleChange}
      />
      <MdEditor
        className="h-[500px] w-[800px] dark:bg-[#212121]"
        renderHTML={(text) => <Markdown>{text}</Markdown>}
        value={markdownContent}
        name='content'
        onChange={handleEditorChange}
      // onImageUpload={handleImageUpload}
      />
      <button type="submit">Submit</button>
      {state.error && <p>{state.error}</p>}
    </form>
  );
}