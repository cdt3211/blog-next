'use client'
import React from 'react'
import { useFormState } from "react-dom";
import Link from 'next/link'
import { login } from '@/lib/actions/authActions';

export default function LoginForm() {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <form action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      {/* <Link href="/user/register">
        {"Don't have an account?"} <b>Register</b>
      </Link> */}
    </form>
  );
};