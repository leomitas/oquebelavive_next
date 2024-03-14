import { aboutMe } from '@/database'
import React from 'react'
import Image from 'next/image'

export default function AboutMe() {
  const sentences = aboutMe.description.split('. ')
  return (
    <section className='max-w-7xl mx-auto xl:px-0 flex flex-col gap-6 pt-24 px-16'>
      <h2 className='font-bold text-3xl text-center'>Sobre mim</h2>
      <div className='flex items-center justify-between flex-col md:flex-row gap-8'>
        <div>
          {sentences.map((sentence, index) => (
            <p key={index} className='text-sm font-normal'>
              {sentence}
            </p>
          ))}
        </div>
        <Image src={aboutMe.image} alt='' priority width={300} height={200} />
      </div>
    </section>
  )
}
