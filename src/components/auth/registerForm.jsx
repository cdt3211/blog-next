'use client'
import { register } from '@/lib/actions/authActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useFormState } from "react-dom";

export default function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined)

  const router = useRouter()

  useEffect(() => {
    state?.success && router.push('/login')
  }, [state?.success, router]);

  return (
    <div>
      <form action={formAction}>
        <input type="text" placeholder='username' name='username' />
        <input type="email" placeholder='email' name='email' />
        <input type="password" placeholder='password' name='password' />
        <input type="password" placeholder='password again' name='passwordRepeat' />
        <button>Register</button>
        {state?.error}
        <Link href={'/user/login'}>登录</Link>
      </form>
    </div>
  )
}
