import Image from 'next/image'
import React from 'react'
import Card from './Card'

function Banner() {
  const blogs = [
    {
      url: '/blogs/viajes grupales',
      alt: 'viajes',
      path: '/viajes_grupales.png',
      title: 'Viajes grupales',
    },
    {
      url: '/blogs/viajes a la medida',
      alt: 'viajes',
      path: '/viajes_a_la_medida.png',
      title: 'Viajes a la medida',
    },
    {
      url: '/blogs/Destinos para parejas',
      alt: 'viajes',
      path: '/Destinos_para_parejas.png',
      title: 'Destinos para parejas',
    },
  ]
  return (
    <div className='w-full relative flex flex-col justify-end items-center h-[54rem] overflow-hidden'>
      <div className='mt-[25rem] text-8xl text-white font-bold tracking-[0.25em] '>
        THE TRAVEL
      </div>
      <div className='text-secondary-color font-bold text-4xl tracking-[1.3em]'>
        EXPERIENCE
      </div>
      <div className='flex items-center justify-center mt-14 gap-x-16 mb-12'>
        {blogs.map(blog => (
          <Card
            key={blog.url}
            url={blog.url}
            alt={blog.alt}
            path={blog.path}
            title={blog.title}
          ></Card>
        ))}
      </div>
      <Image
        className='absolute top-0 left-0 w-full object-cover -z-10 '
        src='/header.png'
        alt='banner'
        width={1920}
        height={877}
      />
    </div>
  )
}

export default Banner
