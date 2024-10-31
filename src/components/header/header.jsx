import React from 'react'
import NavLinks from './navLinks'
import Link from 'next/link'
import { auth } from '@/auth';

export default async function Header() {
  const session = await auth();
  return (
    <header className='border-b shadow-sm'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link className='text-xl font-bold' href={'/'}>Abner</Link>
          </div>
          <NavLinks session={session} />
        </div>
      </div>
    </header>
  )
}
