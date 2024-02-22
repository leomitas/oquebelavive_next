import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between max-w-7xl mx-auto p-4 xl:px-0 border-t-2 border-black lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-full'>
      <p>Oquebelavive. © 2024 Todos direitos reservados. </p>
      <div className='flex gap-1'>
        <p>Desenvolvido por:</p>
        <a href='https://portfolio-leomitas.vercel.app/'>Leonardo Abreu</a>
      </div>
    </footer>
  )
}
