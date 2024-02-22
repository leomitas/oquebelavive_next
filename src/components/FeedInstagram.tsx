'use client'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function FeedInstagram() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_TOKEN
    const baseURL = `https://graph.instagram.com/me/media?fields=media_type,media_url,permalink&access_token=${token}&limit=20`
    fetch(baseURL)
      .then((responsive) => responsive.json())
      .then((data) => {
        setPosts(data.data)
      })
  }, [])

  return (
    <section
      className='max-w-7xl mx-auto pt-8 px-8 xl:px-0 flex flex-col gap-6 p-16'
      id='feed-instagram'
    >
      <h2 className='font-bold text-3xl'>Feed Instagram</h2>
      <p>
        Acompanhe minha vida de professora pedagoga e estudante de Licenciatura
        em Matemática. Um perfil em que compartilho minha vida real, a paixão
        pelos livros e atividades para ensinar matemática.
      </p>
      <Carousel>
        <CarouselContent>
          {posts.map((img: any) => {
            if (img.media_type == 'VIDEO') {
              return (
                <CarouselItem
                  className='sm:basis-1/3 flex items-center max-w-96'
                  key={img.id}
                >
                  <a href={img.permalink} target='_blank' className='w-full'>
                    <video src={img.media_url} className='h-full' playsInline />
                  </a>
                </CarouselItem>
              )
            }
            return (
              <CarouselItem
                className='sm:basis-1/3 flex items-center'
                key={img.id}
              >
                <a href={img.permalink} target='_blank' className='w-full'>
                  <img src={img.media_url} alt='' className='w-full' />
                </a>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 xl:gap-6'></ul>
    </section>
  )
}
