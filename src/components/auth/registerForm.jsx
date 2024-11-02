'use client'
import { register } from '@/lib/actions/authActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordRepeat: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (success) {
      router.push('/user/login');
    }
  }, [success, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await register(new FormData(e.target));
    if (result.error) {
      setError(result.error);
    } else {
      setError(null);
      setSuccess(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder='password again'
          name='passwordRepeat'
          value={formData.passwordRepeat}
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        {error && <div className="error">{error}</div>}
        <Link href={'/user/login'}>登录</Link>
      </form>
    </div>
  )
}