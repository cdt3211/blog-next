import Link from 'next/link'
import React from 'react'

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Write',
    path: '/write'
  }

]
export default function NavLinks() {
  return (
    <div className='space-x-8'>
      {links.map(link => (
        <Link className='text-gray-600 hover:text-gray-800 transition-colors' key={link.name} href={link.path}>{link.name}</Link>
      ))}
    </div>
  )
}
