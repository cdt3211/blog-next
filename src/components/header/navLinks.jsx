'use client'
import { auth, signOut } from '@/auth'
import { handleLogout } from '@/lib/actions/authActions'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Write',
    path: '/admin/write',
  }

]
export default function NavLinks({ session }) {
  return (
    <div className='space-x-8 flex'>
      {links.map(link => (
        <Link className='flex gap-1 text-gray-600 hover:text-gray-800 transition-colors' key={link.name} href={link.path}>
          {link.name}
        </Link>
      ))}
      {session ? (
        <form action={handleLogout}>
          <button>Logout</button>
        </form>
      ) : (
        <Link href='/user/login'>
          Login
        </Link>
      )}
    </div>
  )
}
