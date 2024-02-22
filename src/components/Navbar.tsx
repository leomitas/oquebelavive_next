import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='bg-lavender-rose-1 fixed top-0 left-0 z-50 w-screen'>
      <ul className='max-w-7xl mx-auto px-4 lg:px-8 xl:px-0 flex justify-between p-2'>
        <li className='flex items-center'>
          <h2 className='text-black font-bold text-xl'>Oquebelavive</h2>
        </li>
        <li className='flex gap-4'>
          <Link href={'/'}>
            <Button
              variant={'link'}
              className='font-bold text-black text-xl p-0'
            >
              Home
            </Button>
          </Link>
          <Link href={'#contacts'}>
            <Button
              variant={'link'}
              className='font-bold text-black text-xl p-0'
            >
              Contatos
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
