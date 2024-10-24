import React from 'react'
import NavLinks from './navLinks'

export default function Header() {
  return (
    <header className='border-b shadow-sm'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-xl font-bold'>Abner</h1>
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  )
}
