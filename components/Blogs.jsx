import React from 'react'
import Blog from './Blog'

async function Blogs() {
  const blogs = await (
    await fetch('https://api.test.interactiva.net.co/api/get-blogs/')
  ).json()
  return (
    <div className='w-dvw overflow-hiddens flex flex-col justify-end items-center bg-secondary-color pb-20'>
      <h2 className='text-white font-bold text-4xl tracking-[0.5em] max-w-[1325px] py-10 sm:py-20'>
        BLOGS
      </h2>
      <div className='flex flex-wrap gap-5 sm:gap-14 items-stretch justify-center'>
        <Blog
          path={'/blogs_1.png'}
          tittle={blogs[0].title}
          url={blogs[0].url_front}
        >
          <p className='font-thin text-xl text-justify max-w-[32rem] line-clamp-3'>
            {blogs[0].description}
          </p>
        </Blog>
        <div className='flex flex-col justify-between gap-5'>
          <Blog
            path={'https://api.test.interactiva.net.co' + blogs[1].image_cover}
            tittle={blogs[1].title}
            url={blogs[1].url_front}
          ></Blog>
          <Blog
            path={'https://api.test.interactiva.net.co' + blogs[2].image_cover}
            tittle={blogs[2].title}
            url={blogs[2].url_front}
          >
            <div className='h-2'></div>
          </Blog>
        </div>
      </div>
    </div>
  )
}

export default Blogs
