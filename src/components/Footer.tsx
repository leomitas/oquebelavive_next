import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-between max-w-7xl mx-auto p-4 xl:px-0 border-t-2 border-black'>
      <p>© 2024 Oquebelavive. Todos direitos reservados | <a href="https://www.termsfeed.com/live/0fcd2e60-84dc-4d28-a178-86561bc7bc71">Política de Privacidade</a> | <a href="https://www.termsfeed.com/live/9325fecc-01e6-4111-ae32-14f71a6282d7">Termos de Serviço</a></p>
      <div className='flex gap-1'>
        <p>Desenvolvido por:</p>
        <a href='https://portfolio-leomitas.vercel.app/'>Leonardo Abreu</a>
      </div>
    </footer>
  )
}
