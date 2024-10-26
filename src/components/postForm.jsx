import React from 'react';

export default function PostForm({ initialValues, onSubmit }) {
  return (
    <div>
      <h1>{initialValues.id ? 'Edit' : 'Write'}</h1>
      <form action={onSubmit}>
        {initialValues.id && <input type="hidden" name='id' value={initialValues.id} />}
        <input type="text" placeholder='title' name='title' defaultValue={initialValues.title} />
        <input type="text" placeholder='category' name='category' defaultValue={initialValues.category} />
        <textarea type="text" name="content" cols="30" rows="10" defaultValue={initialValues.content}></textarea>
        <button type='submit'>Publish</button>
      </form>
    </div>
  );
}