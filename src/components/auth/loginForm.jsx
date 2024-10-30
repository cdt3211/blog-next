'use client'
import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'


export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      username: userInfo.username,
      password: userInfo.password,
    });

    if (res.ok) {
      // 登录成功，重定向或其他操作
      alert('登录成功');
    } else {
      setError('登录失败，请检查您的用户名和密码。');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="用户名"
        value={userInfo.username}
        onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="密码"
        value={userInfo.password}
        onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
      />
      <button type="submit">登录</button>
      {error && <p>{error}</p>}
    </form>
  );
}