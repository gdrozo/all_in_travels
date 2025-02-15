import Image from 'next/image'
import React from 'react'
import Card from './Card'

async function Banner() {
  const blogs = await (
    await fetch('https://api.test.interactiva.net.co/api/get-categories/')
  ).json()

  const banner = (
    await (
      await fetch('https://api.test.interactiva.net.co/api/get-banners/')
    ).json()
  )[0]

  return (
    <div className='w-full relative flex flex-col justify-end items-center lg:h-[54rem] pt-20 md:pt-32 lg:pt-0 overflow-hidden'>
      <div className='lg:mt-[25rem] lg:text-8xl sm:text-4xl text-2xl text-whites font-bold tracking-[0.25em] '>
        THE TRAVEL
      </div>
      <div className='text-secondary-color font-bold lg:text-4xl sm:text-xl text-sm tracking-[1.3em] text-center'>
        EXPERIENCE
      </div>
      <div className='flex flex-wrap items-center justify-center mt-14 gap-2 sm:gap-16 mb-12'>
        {blogs.map(blog => (
          <Card
            key={blog.name}
            url={blog.url_front}
            alt={blog.name}
            path={'https://api.test.interactiva.net.co' + blog.image_banner}
            title={blog.name}
          ></Card>
        ))}
      </div>
      <Image
        className='absolute top-0 left-0 w-full object-cover h-80 md:h-auto -z-10 '
        src={'https://api.test.interactiva.net.co' + banner.image}
        alt={banner.title}
        width={1920}
        height={877}
      />
    </div>
  )
}

export default Banner
