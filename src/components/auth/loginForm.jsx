'use client'
import React, { useState } from 'react';
import { login } from '@/lib/actions/authActions';

export default function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(new FormData(e.target));
    if (result.error) {
      setError(result.error);
    } else {
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {error && <div className="error">{error}</div>}
      {/* <Link href="/user/register">
        {"Don't have an account?"} <b>Register</b>
      </Link> */}
    </form>
  );
}