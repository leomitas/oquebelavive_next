'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link'

export default function FeedInstagram() {
  const [posts, setPosts] = useState([])

  const token =
    'IGQWROQk9YVm5FZAEVaYUxEbTE4bF9ONUVjT2dmdEdEVERQNFVyRGJ2N3R3OWNNSFJIcVFaR05yT3ZAXeEtkX21GX3dTcW0xNnhpdS1LLS15VEdQWWNyMWFyaHUwZAE5GN1d1NWxSRGFnSHdRdFo5d0UyZAUhHX2JXVzAZD'
  const baseURL = `https://graph.instagram.com/me/media?fields=media_type,media_url,permalink&access_token=${token}&limit=20`
  useEffect(() => {
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
      <Carousel>
        <CarouselContent>
          {posts.map((img: any) => {
            return (
              <CarouselItem
                className='sm:basis-1/3 flex items-center'
                key={img.id}
              >
                <a href={img.permalink} target='_blank' className='w-full'>
                  <img src={img.media_url} alt='' className='w-full' />
                  {/* <Image src={img.media_url} alt='' width={300} height={300} /> */}
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
