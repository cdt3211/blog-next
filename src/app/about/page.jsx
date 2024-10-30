import React from 'react'
import Link from 'next/link';

export default function About() {
  return (
    <div className='container'>
      About
      <Link href={'/login'}>login</Link>
    </ div>
  )
}
