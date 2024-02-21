import Link from 'next/link'
import React from 'react'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'

export default function Footer() {
  return (
    <footer
      className='flex justify-between max-w-7xl mx-auto pt-8 px-8 xl:px-0 p-16'
      id='contacts'
    >
      <h2 className='font-bold text-2xl flex items-center'>Oquebelavive</h2>
      <div className='flex gap-2 flex-col'>
        <h3 className='font-bold text-lg'>Redes sociais</h3>
        <Link
          href='https://www.instagram.com/oquebelavive/'
          target='_blank'
          className='flex items-center gap-2'
        >
          <SiInstagram size={25} />
          <p className='font-bold'>Instagram</p>
        </Link>
        <Link
          href='https://api.whatsapp.com/send?phone=5512992412575'
          className='flex items-center gap-2'
        >
          <SiWhatsapp size={25} />
          <p className='font-bold'>Whatsapp</p>
        </Link>
      </div>
    </footer>
  )
}
